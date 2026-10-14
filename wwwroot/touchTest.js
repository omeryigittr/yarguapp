window.touchTest = {
    dotNetHelper: null,
    isDragging: false,
    touchedIndexes: new Set(),
    containerId: null,

    init: function (containerId, dotNetRef, initialTouched) {
        this.containerId = containerId;
        this.dotNetHelper = dotNetRef;
        this.touchedIndexes = new Set(initialTouched || []);
        
        const container = document.getElementById(containerId);
        if (!container) return;

        // Sync initial state to DOM
        const cells = container.querySelectorAll('.touch-cell');
        cells.forEach(cell => {
            const idx = parseInt(cell.getAttribute('data-index'), 10);
            if (this.touchedIndexes.has(idx)) {
                cell.classList.add('hit');
            } else {
                cell.classList.remove('hit');
            }
        });

        const processCoordinate = (x, y) => {
            const target = document.elementFromPoint(x, y);
            if (!target) return;
            const cell = target.closest('.touch-cell');
            if (cell) {
                const idx = parseInt(cell.getAttribute('data-index'), 10);
                if (!isNaN(idx) && !this.touchedIndexes.has(idx)) {
                    this.touchedIndexes.add(idx);
                    cell.classList.add('hit');
                    if (this.dotNetHelper) {
                        this.dotNetHelper.invokeMethodAsync('OnCellTouched', idx, this.touchedIndexes.size);
                    }
                }
            }
        };

        const onTouchStart = (e) => {
            this.isDragging = true;
            for (let i = 0; i < e.touches.length; i++) {
                processCoordinate(e.touches[i].clientX, e.touches[i].clientY);
            }
        };

        const onTouchMove = (e) => {
            if (!this.isDragging && e.touches.length === 0) return;
            if (e.cancelable) e.preventDefault();
            for (let i = 0; i < e.touches.length; i++) {
                processCoordinate(e.touches[i].clientX, e.touches[i].clientY);
            }
        };

        const onTouchEnd = (e) => {
            if (e.touches.length === 0) {
                this.isDragging = false;
            }
        };

        const onPointerDown = (e) => {
            if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
                this.isDragging = true;
                processCoordinate(e.clientX, e.clientY);
            }
        };

        const onPointerMove = (e) => {
            if (this.isDragging && (e.pointerType === 'mouse' || e.pointerType === 'pen')) {
                processCoordinate(e.clientX, e.clientY);
            }
        };

        const onPointerUp = (e) => {
            if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
                this.isDragging = false;
            }
        };

        container.ontouchstart = onTouchStart;
        container.ontouchmove = onTouchMove;
        container.ontouchend = onTouchEnd;
        container.ontouchcancel = onTouchEnd;

        container.onpointerdown = onPointerDown;
        window.onpointermove = onPointerMove;
        window.onpointerup = onPointerUp;
    },

    reset: function (containerId) {
        this.touchedIndexes.clear();
        const container = document.getElementById(containerId || this.containerId);
        if (container) {
            container.querySelectorAll('.touch-cell').forEach(cell => cell.classList.remove('hit'));
        }
    }
};

window.audioTest = {
    audioCtx: null,

    playFrequency: function (freq, durationMs) {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!this.audioCtx) {
                this.audioCtx = new AudioContextClass();
            }
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }

            const osc = this.audioCtx.createOscillator();
            const gainNode = this.audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq || 440, this.audioCtx.currentTime);

            gainNode.gain.setValueAtTime(0.35, this.audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + (durationMs / 1000));

            osc.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);

            osc.start();
            setTimeout(() => {
                try {
                    osc.stop();
                    osc.disconnect();
                } catch (e) {}
            }, durationMs || 1000);
            return true;
        } catch (e) {
            console.error('Audio test failed', e);
            return false;
        }
    }
};

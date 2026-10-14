# 📱 Yargu App: Donanım & Pil Hüküm Divanı ⚖️

![.NET](https://img.shields.io/badge/.NET-10.0-512BD4?style=for-the-badge&logo=dotnet)
![MAUI](https://img.shields.io/badge/MAUI-Blazor_Hybrid-5C2D91?style=for-the-badge&logo=blazor)
![Android](https://img.shields.io/badge/Android-Native_APIs-3DDC84?style=for-the-badge&logo=android)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

**Yargu**, eski Türk devlet geleneğindeki adalet ve kesin karar divanından (Eski Türkçe: 𐰖𐰺𐰍𐰆) ilham alınarak geliştirilmiş; akıllı telefonların bataryasını, ekranını, işlemcisini, sensörlerini ve tüm dahili donanım bileşenlerini tarafsız ve objektif bir şekilde test eden yeni nesil bir mobil teşhis (diagnostics) ve donanım karnesi uygulamasıdır.

İkinci el akıllı telefon alım-satımında, cihaz sağlığı takibinde veya cihaz kontrollerinde kullanıcıya cihazın gerçek kondisyonunu milisaniyeler içinde sunar.

---

## 🌐 Detaylı Bilgi ve Tanıtım
Projenin mimarisi, test laboratuvarı detayları, ekran görüntüleri ve arkasındaki geliştirme hikayesi hakkında **tüm detaylı bilgilere resmi web sitesinden ulaşabilirsiniz:**

👉 **[omeryigit.tr/yargu](https://omeryigit.tr/yargu)**

---

## ✨ Öne Çıkan Özellikler

### 🔋 Pil Divanı (Donanımsal BMS & Coulomb Ölçümü)
Piyasadaki yüzeysel şarj yüzdesi gösteren uygulamaların aksine, Android donanım yakıt sayacını (Coulomb Counter) okur.
*   **Gerçek Pil Sağlığı:** Pilin kaç mAh yıprandığını ve anlık termal durumunu gösterir.
*   **Sıfır RAM Tüketimi:** Arka planda pili sömüren servisler çalıştırmaz; **0 MB** arka plan tüketimiyle sadece uygulama açıkken çalışır.

### ▦ Ekran & Dokunmatik Test Laboratuvarı
*   **96 Hücreli Dokunmatik Testi:** Parmağı kaldırmadan ekranda sürükleyerek ölü dokunmatik bölgeleri tespit etme (120Hz uyumlu).
*   **RGB ve Gri Ton Testleri:** Saf renklerle ölü pikselleri ve gri kademelerle OLED yanığı (burn-in) riskini kanıtlar.

### ⚙️ Donanım Tanı Merkezi (Samsung Members Stili)
*   **Sensör & Çevre Birimleri:** Flaş/Fener, 3 Kademeli Haptik Titreşim Testi, Canlı İvmeölçer (Su Terazisi).
*   **Akustik Hoparlör:** Web Audio API ile 440 Hz, 880 Hz ve 1000 Hz saf sinüs tonları çalarak ahize ve ana hoparlör netliğini sınar.
*   **Sistem Bileşenleri:** CPU stres testi (Benchmark), gerçek Depolama ve RAM kapasite analizi.

### ◈ Cihaz Karnesi & Yargu Hükmü
Yapılan testlerin sonucuna göre cihaza **100 üzerinden bir Yargu Puanı** verir. Tek tıkla paylaşıma hazır, ikinci el satışlarında şeffaflık sağlayan objektif bir donanım raporu kopyalar.

---

## 🛠️ Kullanılan Teknolojiler

*   **Framework:** .NET 10 MAUI (Multi-platform App UI)
*   **Arayüz (UI):** Blazor Hybrid (HTML5 / CSS3 / JavaScript Interop)
*   **Native Entegrasyon:** Android Camera2 API, BatteryManager, SensorManager, PowerProfile Reflection
*   **Tasarım Dili:** Cyber-Dark SaaS UI, Modern CSS Gradient ve Mikro-animasyonlar

---

## 🚀 Kurulum ve Derleme (Geliştiriciler İçin)

Projeyi kendi bilgisayarınızda derlemek için aşağıdaki adımları izleyebilirsiniz:

1. **Gereksinimler:** Visual Studio 2022 (v17.8+) veya JetBrains Rider, ve `.NET MAUI` iş yükü yüklü olmalıdır.
2. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/omeryigittr/yargu-app.git](https://github.com/omeryigittr/yargu-app.git)

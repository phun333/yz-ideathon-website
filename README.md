# 🥗 HealthyLife - Kişisel Beslenme Asistanı

HealthyLife, yapay zeka destekli kişisel beslenme asistanı ve diyetisyen platformudur. Sağlıklı yaşam yolculuğunuzda size rehberlik eder, beslenme alışkanlıklarınızı takip eder ve profesyonel diyetisyenlerle bağlantı kurmanızı sağlar.

## 🌟 Özellikler

### 1. AI Beslenme Asistanı
- **Kişisel Diyet Planı**: Hedeflerinize ve tercihlerinize göre özelleştirilmiş beslenme programı
- **Akıllı Öneriler**: Anlık beslenme tavsiyeleri ve alternatif öneriler
- **Soru-Cevap**: Beslenme ve diyet konularında anlık yanıtlar
- **Alışveriş Listesi**: Diyet planınıza uygun market alışveriş listesi

### 2. Beslenme Takibi
- **Kalori Takibi**: Günlük kalori alımı ve yakımı izleme
- **Öğün Kaydı**: Detaylı besin ve porsiyon kayıtları
- **İlerleme Analizi**: Grafikler ve detaylı istatistikler
- **Su Takibi**: Günlük su tüketimi hatırlatma ve kayıt

### 3. Diyetisyen Platformu
- **Uzman Eşleştirme**: İhtiyaçlarınıza uygun diyetisyen önerileri
- **Online Görüşme**: Video görüşme ile uzaktan danışmanlık
- **Randevu Sistemi**: Kolay ve hızlı randevu planlama
- **Uzman Profilleri**: Detaylı diyetisyen bilgileri ve yorumları

### 4. Kişiselleştirme
- **Hedef Belirleme**: Kilo verme, alma veya koruma hedefleri
- **Aktivite Takibi**: Egzersiz ve hareket kaydı
- **Tercih Yönetimi**: Besin tercihleri ve alerjiler
- **İlerleme Raporları**: Haftalık ve aylık gelişim raporları

## 🛠️ Teknolojik Altyapı

### Frontend
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **UI Components**: Custom Components

### Backend
- **API**: Next.js API Routes
- **Database**: (Planlanan) PostgreSQL
- **AI Integration**: Google Gemini API
- **Authentication**: (Planlanan) NextAuth.js

### Deployment
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics

## 📱 Ekran Görüntüleri

(Ekran görüntüleri eklenecek)

## 🚀 Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/yourusername/healthylife.git
```

2. Bağımlılıkları yükleyin:
```bash
cd healthylife
npm install
```

3. Gerekli environment değişkenlerini ayarlayın:
```bash
cp .env.example .env.local
# .env.local dosyasını düzenleyin
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 🔧 Environment Değişkenleri

```env
GEMINI_API_KEY=your_api_key_here
# Diğer API anahtarları eklenecek
```

## 🌐 Sayfa Yapısı

- `/` - Ana Sayfa
- `/dashboard` - Kullanıcı Paneli
- `/chat` - AI Asistan
- `/diet-plan` - Diyet Planı
- `/history` - Geçmiş Kayıtlar
- `/dietitians` - Diyetisyen Listesi
- `/profile` - Profil Yönetimi

## 💰 Gelir Modeli

1. **Diyetisyen Komisyonu**
   - Randevu başına %15-20 platform komisyonu
   - Premium diyetisyen listeleme

2. **Premium Üyelik**
   - Gelişmiş AI özellikleri
   - Detaylı analiz raporları
   - Özelleştirilmiş diyet planları

3. **Kurumsal Paketler**
   - Spor salonları için özel paketler
   - Kurumsal wellness programları

## 🔜 Yol Haritası

- [ ] Gelişmiş AI modeli entegrasyonu
- [ ] Mobil uygulama geliştirme
- [ ] Ödeme sistemi entegrasyonu
- [ ] Diyetisyen paneli
- [ ] Video görüşme altyapısı
- [ ] Besin veritabanı genişletme

## 👥 Hedef Kitle

1. **Bireysel Kullanıcılar**
   - Kilo vermek/almak isteyenler
   - Sağlıklı beslenmeye önem verenler
   - Sporcu beslenmesi takipçileri

2. **Diyetisyenler**
   - Bağımsız çalışan diyetisyenler
   - Klinikler ve sağlık merkezleri
   - Spor merkezi diyetisyenleri

3. **Kurumsal Müşteriler**
   - Spor salonları
   - Şirketler
   - Sağlık kuruluşları

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

Proje Sahibi - [@yourusername](https://twitter.com/yourusername)

Proje Linki: [https://github.com/yourusername/healthylife](https://github.com/yourusername/healthylife)

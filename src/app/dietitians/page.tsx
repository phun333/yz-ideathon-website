'use client';

import Link from 'next/link';

const featuredDietitians = [
  {
    id: 1,
    name: "Dr. Ayşe Yılmaz",
    specialty: "Kilo Kontrolü ve Metabolik Hastalıklar",
    experience: "15 yıl",
    rating: 4.9,
    reviewCount: 127,
    image: "👩‍⚕️",
    availability: "Pazartesi - Cuma",
    price: "500₺",
    expertise: ["Obezite", "Diyabet", "Sporcu Beslenmesi"]
  },
  {
    id: 2,
    name: "Uzm. Dyt. Mehmet Demir",
    specialty: "Sporcu Beslenmesi",
    experience: "8 yıl",
    rating: 4.8,
    reviewCount: 93,
    image: "👨‍⚕️",
    availability: "Salı - Cumartesi",
    price: "450₺",
    expertise: ["Sporcu Beslenmesi", "Kilo Yönetimi", "Performans"]
  },
  {
    id: 3,
    name: "Dyt. Zeynep Kaya",
    specialty: "Çocuk ve Ergen Beslenmesi",
    experience: "12 yıl",
    rating: 4.9,
    reviewCount: 156,
    image: "👩‍⚕️",
    availability: "Pazartesi - Cumartesi",
    price: "475₺",
    expertise: ["Çocuk Beslenmesi", "Alerji", "Büyüme ve Gelişme"]
  }
];

export default function DietitiansPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">Uzman Diyetisyenlerle Tanışın</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Sağlıklı yaşam yolculuğunuzda size en uygun diyetisyeni bulun. 
          Online veya yüz yüze görüşme seçenekleriyle, uzman kadromuz yanınızda.
        </p>
      </div>

      {/* Öne Çıkan Özellikler */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mb-4 text-3xl">🎯</div>
          <h3 className="mb-2 text-lg font-semibold text-primary">Kişiye Özel Eşleştirme</h3>
          <p className="text-sm text-muted-foreground">
            Hedeflerinize ve ihtiyaçlarınıza en uygun diyetisyeni bulun
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mb-4 text-3xl">📅</div>
          <h3 className="mb-2 text-lg font-semibold text-primary">Kolay Randevu</h3>
          <p className="text-sm text-muted-foreground">
            Online veya yüz yüze görüşme için hemen randevu alın
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mb-4 text-3xl">⭐</div>
          <h3 className="mb-2 text-lg font-semibold text-primary">Güvenilir Uzmanlar</h3>
          <p className="text-sm text-muted-foreground">
            Deneyimli ve uzman diyetisyenlerle çalışın
          </p>
        </div>
      </div>

      {/* Diyetisyen Kartları */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Öne Çıkan Diyetisyenler</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredDietitians.map((dietitian) => (
            <div key={dietitian.id} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
                  {dietitian.image}
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{dietitian.name}</h3>
                  <p className="text-sm text-muted-foreground">{dietitian.specialty}</p>
                </div>
              </div>
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Deneyim</span>
                  <span className="font-medium">{dietitian.experience}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Değerlendirme</span>
                  <span className="font-medium">⭐ {dietitian.rating} ({dietitian.reviewCount} yorum)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Görüşme Ücreti</span>
                  <span className="font-medium">{dietitian.price}</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {dietitian.expertise.map((exp, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                  Randevu Al
                </button>
                <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                  Profili İncele
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-primary/5 to-accent/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-primary">Siz de Diyetisyen misiniz?</h2>
        <p className="mb-6 text-muted-foreground">
          HealthyLife platformuna katılın, binlerce potansiyel danışana ulaşın.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/dietitian-register"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Hemen Katılın
          </Link>
          <Link
            href="/about-partnership"
            className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Detaylı Bilgi
          </Link>
        </div>
      </div>
    </div>
  );
} 
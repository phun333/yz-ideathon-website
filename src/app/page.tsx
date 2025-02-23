import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-accent/5 to-transparent py-32">
        {/* Dekoratif Elementler */}
        <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-accent/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-primary/20 to-transparent blur-3xl"></div>

        <div className="container text-center">
          <div className="mx-auto max-w-3xl">
            <div className="group relative mb-8 inline-flex items-center rounded-full border border-border/60 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <span className="relative mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl shadow-inner">✨</span>
              <span className="relative text-sm font-medium text-primary">
                Yapay Zeka Destekli Kişisel Beslenme Asistanı
              </span>
            </div>

            <h1 className="relative mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Sağlıklı Yaşam İçin Akıllı Çözüm
              <span className="absolute -right-4 top-0 text-4xl">🌱</span>
            </h1>

            <p className="relative mb-12 text-xl text-primary/80">
              Yapay zeka teknolojisi ve uzman diyetisyenler eşliğinde, 
              kişiselleştirilmiş beslenme planınızı oluşturun, hedeflerinize ulaşın.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] transition-all group-hover:translate-x-full"></div>
                <span className="relative">Hemen Başla</span>
                <span className="relative text-xl">🚀</span>
              </Link>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="relative grid gap-8 rounded-3xl border border-border/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:grid-cols-3">
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-2 text-4xl font-bold text-primary">10K+</div>
                  <div className="text-sm font-medium text-primary/80">Mutlu Kullanıcı</div>
                </div>
              </div>
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-2 text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm font-medium text-primary/80">Uzman Diyetisyen</div>
                </div>
              </div>
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-2 text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm font-medium text-primary/80">Başarı Oranı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="relative bg-gradient-to-b from-transparent via-primary/5 to-transparent py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="relative mb-4 text-4xl font-bold text-primary">
              Neden HealthyLife?
              <span className="absolute -right-6 top-0 text-3xl">🎯</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary/80">
              Sağlıklı yaşam yolculuğunuzda size özel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Özellik Kartları */}
            {[
              {
                icon: '🤖',
                title: 'AI Beslenme Asistanı',
                description: '7/24 size özel beslenme önerileri, anlık sorularınıza yapay zeka destekli cevaplar'
              },
              {
                icon: '📊',
                title: 'Kişisel Diyet Planı',
                description: 'Hedeflerinize ve yaşam tarzınıza özel hazırlanmış beslenme programları'
              },
              {
                icon: '👩‍⚕️',
                title: 'Uzman Desteği',
                description: 'Alanında uzman diyetisyenlerle online veya yüz yüze görüşme imkanı'
              },
              {
                icon: '📈',
                title: 'İlerleme Takibi',
                description: 'Detaylı grafikler ve raporlarla gelişiminizi adım adım izleyin'
              },
              {
                icon: '👥',
                title: 'Motivasyon Desteği',
                description: 'Başarı hikayeleri ve deneyim paylaşımlarıyla motive olun'
              },
              {
                icon: '⚡',
                title: 'Esnek Program',
                description: 'Yaşam tarzınıza uygun, sürdürülebilir beslenme planları'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white/80 via-white/80 to-primary/5 p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-3xl shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">{feature.title}</h3>
                  <p className="text-primary/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kullanıcı Deneyimleri */}
      <div className="relative bg-gradient-to-b from-transparent via-primary/5 to-transparent py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="relative mb-4 text-4xl font-bold text-primary">
              Kullanıcı Deneyimleri
              <span className="absolute -right-6 top-0 text-3xl">💬</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary/80">
              HealthyLife ile hedeflerine ulaşan kullanıcılarımızın hikayeleri
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                avatar: '👩',
                name: 'Ayşe Y.',
                status: '15 kg verdi',
                comment: '"AI asistan sayesinde her an destek alabildim. 3 ayda hedefime ulaştım ve yeni beslenme alışkanlıkları edindim."'
              },
              {
                avatar: '👨',
                name: 'Mehmet K.',
                status: 'Sporcu',
                comment: '"Antrenman programıma özel beslenme planı hazırlandı. Performansım gözle görülür şekilde arttı."'
              },
              {
                avatar: '👩',
                name: 'Zeynep A.',
                status: 'Diyabet hastası',
                comment: '"Diyetisyenim ve AI asistan sayesinde şeker değerlerimi dengede tutmayı öğrendim. Yaşam kalitem arttı."'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white/80 via-white/80 to-primary/5 p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl shadow-inner">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-primary/80">{testimonial.status}</div>
                    </div>
                  </div>
                  <p className="text-lg italic text-primary/80">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gradient-to-b from-transparent to-primary/10 py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white/80 via-white/80 to-primary/5 p-16 text-center shadow-xl backdrop-blur-sm">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl"></div>
            
            <div className="relative">
              <h2 className="mb-6 text-4xl font-bold text-primary">
                Sağlıklı Yaşam Yolculuğunuz Başlıyor
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary/80">
                Hemen ücretsiz hesap oluşturun, size özel beslenme planınızı alın.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/signup"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] transition-all group-hover:translate-x-full"></div>
                  <span className="relative">Ücretsiz Başla</span>
                  <span className="relative text-xl">🎉</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="container py-8">
      {/* Üst Başlık ve Motivasyon */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Hoş Geldin, Ali!</h1>
          <p className="mt-2 text-muted-foreground">Bugün hedeflerine bir adım daha yaklaşacaksın 💪</p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-muted px-4 py-2 text-sm text-primary">
          <span className="text-xl">🏆</span>
          <span>7 günlük başarı serisi!</span>
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Günlük Özet Kartı */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-muted/50">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">📊</span>
              <h2 className="text-xl font-semibold text-primary">Günlük Özet</h2>
            </div>
            <span className="text-sm text-muted-foreground">Kalan: 500 kcal</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Alınan Kalori</span>
                <span className="font-medium">1500/2000 kcal</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-lg border border-border p-2">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Protein</p>
                <p className="font-medium text-primary">65g</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Karbonhidrat</p>
                <p className="font-medium text-primary">180g</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Yağ</p>
                <p className="font-medium text-primary">45g</p>
              </div>
            </div>
          </div>
        </div>

        {/* Su Takibi Kartı */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-muted/50">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">💧</span>
              <h2 className="text-xl font-semibold text-primary">Su Takibi</h2>
            </div>
            <button className="rounded-full bg-muted p-2 text-xl text-primary hover:bg-muted/80">➕</button>
          </div>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Günlük İlerleme</span>
                <span className="font-medium">1.5/2.5 L</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex h-12 items-center justify-center rounded-lg border ${
                    i < 6 ? 'border-[#60A5FA] bg-[#60A5FA]/10' : 'border-border'
                  }`}
                >
                  💧
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Egzersiz Takibi Kartı */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-muted/50">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">🏃‍♀️</span>
              <h2 className="text-xl font-semibold text-primary">Egzersiz</h2>
            </div>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">+150 kcal</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Günlük Hedef</span>
                <span className="font-medium">20/30 dk</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 rounded-lg border border-border p-2">
              <div className="space-y-1 text-center">
                <p className="text-2xl font-medium text-primary">5.2</p>
                <p className="text-xs text-muted-foreground">km yürüyüş</p>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-2xl font-medium text-primary">6,500</p>
                <p className="text-xs text-muted-foreground">adım</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Günlük Öğünler */}
      <div className="mt-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">🍽️</span>
            <h2 className="text-2xl font-semibold text-primary">Günlük Öğünler</h2>
          </div>
          <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
            + Öğün Ekle
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-medium text-primary">Kahvaltı</h3>
              <span className="text-sm text-muted-foreground">08:00</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">• 2 yumurta (160 kcal)</p>
              <p className="text-sm text-muted-foreground">• Tam tahıllı ekmek (120 kcal)</p>
              <p className="text-sm text-muted-foreground">• Beyaz peynir (80 kcal)</p>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-medium text-primary">Toplam: 360 kcal</span>
              <button className="rounded-full bg-muted p-2 text-primary hover:bg-muted/80">✏️</button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-medium text-primary">Öğle Yemeği</h3>
              <span className="text-sm text-muted-foreground">13:00</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">• Izgara tavuk (250 kcal)</p>
              <p className="text-sm text-muted-foreground">• Mevsim salata (80 kcal)</p>
              <p className="text-sm text-muted-foreground">• Bulgur pilavı (200 kcal)</p>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-medium text-primary">Toplam: 530 kcal</span>
              <button className="rounded-full bg-muted p-2 text-primary hover:bg-muted/80">✏️</button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-medium text-primary">Akşam Yemeği</h3>
              <span className="text-sm text-muted-foreground">19:30</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">• Somon (300 kcal)</p>
              <p className="text-sm text-muted-foreground">• Izgara sebze (120 kcal)</p>
              <p className="text-sm text-muted-foreground">• Mercimek çorbası (150 kcal)</p>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-medium text-primary">Toplam: 570 kcal</span>
              <button className="rounded-full bg-muted p-2 text-primary hover:bg-muted/80">✏️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
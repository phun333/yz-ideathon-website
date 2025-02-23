'use client';

import { CalorieChart } from '../components/CalorieChart';

export default function HistoryPage() {
  const kaloriler = [
    { gün: 'Pazartesi', hedef: 2000, alınan: 1850, öğünler: [
      { öğün: 'Kahvaltı', yemekler: 'Yulaf ezmesi (320), muz (105), badem (160)', toplam: 585 },
      { öğün: 'Ara Öğün', yemekler: 'Protein bar (220), yeşil elma (95)', toplam: 315 },
      { öğün: 'Öğle', yemekler: 'Izgara tavuk (250), kinoa (180), brokoli (55)', toplam: 485 },
      { öğün: 'Ara Öğün', yemekler: 'Yoğurt (150), yaban mersini (85)', toplam: 235 },
      { öğün: 'Akşam', yemekler: 'Somon (220), ıspanak (30), tatlı patates (180)', toplam: 430 }
    ]},
    { gün: 'Salı', hedef: 2000, alınan: 2100, öğünler: [
      { öğün: 'Kahvaltı', yemekler: '2 yumurta (160), tam ekmek (120), peynir (120)', toplam: 400 },
      { öğün: 'Ara Öğün', yemekler: 'Smoothie (280), ceviz (185)', toplam: 465 },
      { öğün: 'Öğle', yemekler: 'Mercimek çorbası (220), bulgur pilavı (330)', toplam: 550 },
      { öğün: 'Ara Öğün', yemekler: 'Meyve tabağı (160), badem (160)', toplam: 320 },
      { öğün: 'Akşam', yemekler: 'Köfte (350), sebze (115)', toplam: 465 }
    ]},
    { gün: 'Çarşamba', hedef: 2000, alınan: 1950, öğünler: [
      { öğün: 'Kahvaltı', yemekler: 'Omlet (280), avokado (160), ekmek (120)', toplam: 560 },
      { öğün: 'Ara Öğün', yemekler: 'Protein shake (180), muz (105)', toplam: 285 },
      { öğün: 'Öğle', yemekler: 'Ton balıklı salata (380), zeytinyağı (120)', toplam: 500 },
      { öğün: 'Ara Öğün', yemekler: 'Kuru meyveler (150), fındık (180)', toplam: 330 },
      { öğün: 'Akşam', yemekler: 'Tavuk göğsü (275), quinoa (180)', toplam: 455 }
    ]},
    { gün: 'Perşembe', hedef: 2000, alınan: 2000, öğünler: [
      { öğün: 'Kahvaltı', yemekler: 'Peynirli tost (380), domates (25), salatalık (15)', toplam: 420 },
      { öğün: 'Ara Öğün', yemekler: 'Yulaflı bar (240), portakal (85)', toplam: 325 },
      { öğün: 'Öğle', yemekler: 'Etli nohut (420), pirinç (220)', toplam: 640 },
      { öğün: 'Ara Öğün', yemekler: 'Yoğurt (150), bal (65), yulaf (120)', toplam: 335 },
      { öğün: 'Akşam', yemekler: 'Izgara balık (280), sebze sote (180)', toplam: 460 }
    ]},
    { gün: 'Cuma', hedef: 2000, alınan: 1850, öğünler: [
      { öğün: 'Kahvaltı', yemekler: 'Menemen (340), zeytin (100), peynir (120)', toplam: 560 },
      { öğün: 'Ara Öğün', yemekler: 'Protein bar (220), armut (100)', toplam: 320 },
      { öğün: 'Öğle', yemekler: 'Tavuk wrap (380), yoğurt (150)', toplam: 530 },
      { öğün: 'Ara Öğün', yemekler: 'Smoothie bowl (280)', toplam: 280 },
      { öğün: 'Akşam', yemekler: 'Hindi (250), mercimek (210)', toplam: 460 }
    ]},
    { gün: 'Cumartesi', hedef: 2000, alınan: 1900, öğünler: [
      { öğün: 'Kahvaltı', yemekler: 'Pankek (420), muz (105), bal (65)', toplam: 590 },
      { öğün: 'Ara Öğün', yemekler: 'Protein shake (180), badem (160)', toplam: 340 },
      { öğün: 'Öğle', yemekler: 'Köfte (350), bulgur (220), yoğurt (150)', toplam: 720 },
      { öğün: 'Ara Öğün', yemekler: 'Meyve tabağı (160)', toplam: 160 },
      { öğün: 'Akşam', yemekler: 'Sebze çorbası (180), tam ekmek (120)', toplam: 300 }
    ]},
    { gün: 'Pazar', hedef: 2000, alınan: 1500, öğünler: [
      { öğün: 'Kahvaltı', yemekler: 'Simit (310), peynir (120), domates (25)', toplam: 455 },
      { öğün: 'Ara Öğün', yemekler: 'Elma (95), ceviz (185)', toplam: 280 },
      { öğün: 'Öğle', yemekler: 'Tavuk salata (320), zeytinyağı (120)', toplam: 440 },
      { öğün: 'Ara Öğün', yemekler: 'Yoğurt (150), yulaf (120)', toplam: 270 },
      { öğün: 'Akşam', yemekler: 'Izgara sebze (150), humus (180)', toplam: 330 }
    ]}
  ];

  const chartData = kaloriler.map(gün => ({
    day: gün.gün,
    calories: gün.alınan,
    target: gün.hedef
  }));

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Geçmiş İstatistikler</h1>
          <p className="mt-2 text-muted-foreground">Son 7 günlük beslenme ve aktivite verileriniz</p>
        </div>
        <select className="rounded-lg border border-border bg-card px-4 py-2 text-sm">
          <option>Son 7 Gün</option>
          <option>Son 30 Gün</option>
          <option>Son 3 Ay</option>
        </select>
      </div>

      {/* Kalori Grafiği */}
      <CalorieChart 
        data={chartData}
        title="Haftalık Kalori Takibi"
        subtitle="Hedef ve gerçekleşen değerler"
      />

      {/* Geçmiş Öğünler Tablosu */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl">🍽️</span>
          <div>
            <h2 className="text-xl font-semibold text-primary">Geçmiş Öğünler</h2>
            <p className="text-sm text-muted-foreground">Son 3 günün detaylı öğün kayıtları</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Gün</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Öğün</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Yemekler</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Kalori</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {kaloriler.slice(0, 3).map((gün) => (
                gün.öğünler.map((öğün, öğünIndex) => (
                  <tr key={`${gün.gün}-${öğünIndex}`} className="bg-card hover:bg-muted/50">
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {öğünIndex === 0 ? gün.gün : ''}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-primary">{öğün.öğün}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{öğün.yemekler}</td>
                    <td className="px-4 py-3 text-right text-sm font-medium text-primary">{öğün.toplam} kcal</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 
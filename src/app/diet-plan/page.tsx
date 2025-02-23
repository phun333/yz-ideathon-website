'use client';

import { useState } from 'react';
import { CalorieChart } from '../components/CalorieChart';

export default function DietPlanPage() {
  const [activeDay, setActiveDay] = useState('Pazartesi');

  const weeklyCalories = {
    'Pazartesi': 1850,
    'Salı': 2100,
    'Çarşamba': 1950,
    'Perşembe': 2000,
    'Cuma': 1850,
    'Cumartesi': 1900,
    'Pazar': 1500
  };

  const weeklyPlan = {
    'Pazartesi': {
      totalCalories: 1850,
      meals: [
        { time: '08:00', type: 'Kahvaltı', icon: '🍳', calories: 400, foods: ['2 yumurta', 'tam tahıllı ekmek', 'peynir', 'zeytin'], macros: { protein: '20g', carbs: '30g', fat: '15g' } },
        { time: '10:30', type: 'Ara Öğün', icon: '🥪', calories: 150, foods: ['1 adet meyve', '5 adet badem'], macros: { protein: '5g', carbs: '15g', fat: '8g' } },
        { time: '13:00', type: 'Öğle', icon: '🥗', calories: 500, foods: ['Izgara tavuk', 'salata', 'bulgur pilavı'], macros: { protein: '35g', carbs: '45g', fat: '20g' } },
        { time: '16:00', type: 'Ara Öğün', icon: '🥪', calories: 150, foods: ['Yoğurt', 'yulaf'], macros: { protein: '8g', carbs: '20g', fat: '5g' } },
        { time: '19:00', type: 'Akşam', icon: '🍽️', calories: 600, foods: ['Balık', 'sebze', 'çorba'], macros: { protein: '40g', carbs: '50g', fat: '25g' } }
      ]
    },
    'Salı': {
      totalCalories: 2100,
      meals: [
        { time: '08:00', type: 'Kahvaltı', icon: '🍳', calories: 400, foods: ['Yulaf ezmesi', 'süt', 'muz', 'tarçın'], macros: { protein: '15g', carbs: '45g', fat: '12g' } },
        { time: '10:30', type: 'Ara Öğün', icon: '🥪', calories: 150, foods: ['Protein bar'], macros: { protein: '10g', carbs: '15g', fat: '7g' } },
        { time: '13:00', type: 'Öğle', icon: '🥗', calories: 500, foods: ['Mercimek çorbası', 'kinoa salatası'], macros: { protein: '25g', carbs: '60g', fat: '18g' } },
        { time: '16:00', type: 'Ara Öğün', icon: '🥪', calories: 150, foods: ['Smoothie'], macros: { protein: '5g', carbs: '25g', fat: '3g' } },
        { time: '19:00', type: 'Akşam', icon: '🍽️', calories: 600, foods: ['Köfte', 'sebze', 'bulgur pilavı'], macros: { protein: '35g', carbs: '55g', fat: '25g' } }
      ]
    }
  };

  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const dailyPlan = weeklyPlan[activeDay as keyof typeof weeklyPlan];

  const chartData = days.map(day => ({
    day,
    calories: weeklyCalories[day as keyof typeof weeklyCalories] || 0,
    target: 2000
  }));

  return (
    <div className="container py-8">
      {/* Başlık ve Açıklama */}
      <div className="relative mb-12 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 shadow-lg">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>
        
        <div className="relative">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-2xl shadow-inner">
              🥗
            </div>
            <h1 className="text-3xl font-bold text-primary">
              <span className="rounded-lg bg-white/80 px-4 py-1 shadow-sm">Haftalık Diyet Planınız</span>
            </h1>
          </div>
          <p className="max-w-2xl rounded-lg bg-white/80 px-4 py-2 text-lg text-primary/80 shadow-sm">
            Size özel hazırlanmış, dengeli ve sağlıklı beslenme programı. 
            Öğünlerinizi takip edin, hedeflerinize ulaşın.
          </p>
        </div>
      </div>

      {/* Kalori Grafiği */}
      <CalorieChart 
        data={chartData}
        title="Kalori Takibi"
        subtitle="Günlük hedef: 2000 kcal"
      />

      {/* Gün Seçimi */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-white/80 shadow-sm">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-xl font-semibold text-primary">Günlük Plan</h2>
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20">
              ◀️
            </button>
            <span className="rounded-lg bg-primary/5 px-3 py-1 font-medium text-primary">15-21 Nisan</span>
            <button className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20">
              ▶️
            </button>
          </div>
        </div>
        <div className="flex gap-1 overflow-x-auto bg-muted/30 p-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-shrink-0 rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                activeDay === day
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-primary/10'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {dailyPlan && (
        <div className="space-y-6">
          {/* Günlük Özet */}
          <div className="grid gap-6 rounded-2xl border border-border bg-white/80 p-6 shadow-sm lg:grid-cols-4">
            <div className="col-span-2 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl">
                📊
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Günlük Hedef</h3>
                <p className="text-sm text-muted-foreground">2000 kcal hedefinden {dailyPlan.totalCalories} kcal alındı</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl">
                💧
              </div>
              <div>
                <p className="font-medium text-primary">Su Hedefi</p>
                <p className="text-sm text-muted-foreground">1.5/2.5 L</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl">
                🏃‍♂️
              </div>
              <div>
                <p className="font-medium text-primary">Egzersiz</p>
                <p className="text-sm text-muted-foreground">30 dk yürüyüş</p>
              </div>
            </div>
          </div>

          {/* Öğünler */}
          <div className="space-y-4">
            {dailyPlan.meals.map((meal, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-white/80 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                      {meal.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">{meal.type}</h4>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {meal.calories} kcal
                    </span>
                    <button className="rounded-lg p-2 text-primary opacity-0 transition-opacity hover:bg-primary/10 group-hover:opacity-100">
                      ✏️
                    </button>
                  </div>
                </div>
                <div className="grid gap-4 p-4 lg:grid-cols-2">
                  <div>
                    <h5 className="mb-2 text-sm font-medium text-primary">İçerik</h5>
                    <ul className="space-y-1">
                      {meal.foods.map((food, foodIndex) => (
                        <li key={foodIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">•</span>
                          {food}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 text-sm font-medium text-primary">Makrolar</h5>
                    <div className="grid grid-cols-3 gap-2 rounded-lg border border-border p-2">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Protein</p>
                        <p className="font-medium text-primary">{meal.macros.protein}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Karb</p>
                        <p className="font-medium text-primary">{meal.macros.carbs}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Yağ</p>
                        <p className="font-medium text-primary">{meal.macros.fat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Öneriler */}
          <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                💡
              </div>
              <h3 className="text-lg font-semibold text-primary">Günün İpuçları</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '💧', title: 'Su Tüketimi', tip: 'Günde en az 2-2.5 litre su içmeyi unutmayın' },
                { icon: '⏰', title: 'Öğün Zamanlaması', tip: 'Öğünlerinizi düzenli saatlerde yemeye çalışın' },
                { icon: '🍎', title: 'Ara Öğünler', tip: 'Ara öğünleri atlamamaya özen gösterin' },
                { icon: '📏', title: 'Porsiyon Kontrolü', tip: 'Porsiyon kontrolüne dikkat edin' },
                { icon: '🏃‍♀️', title: 'Egzersiz', tip: 'Haftada en az 3 gün 30 dakika egzersiz yapın' },
                { icon: '🍽️', title: 'Yemek Düzeni', tip: 'Yemeklerinizi yavaş yiyin ve iyice çiğneyin' }
              ].map((öneri, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-white/90 p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl shadow-inner">
                      {öneri.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">{öneri.title}</h4>
                      <p className="text-sm text-muted-foreground">{öneri.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Günlük Toplam Özet */}
          <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/5 via-white to-primary/5 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                  📈
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Günlük Toplam</h3>
                  <p className="text-sm text-muted-foreground">Hedef: 2000 kcal</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{dailyPlan.totalCalories} kcal</div>
                <div className="text-sm text-muted-foreground">
                  {dailyPlan.totalCalories < 2000 ? `${2000 - dailyPlan.totalCalories} kcal kaldı` : 'Hedefe ulaşıldı'}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted-foreground">İlerleme</span>
                <span className="font-medium text-primary">{Math.round((dailyPlan.totalCalories / 2000) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all" 
                  style={{ width: `${Math.min((dailyPlan.totalCalories / 2000) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
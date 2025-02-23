'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    height: '',
    weight: '',
    goal: 'lose' // 'lose', 'gain', 'maintain'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo ve Başlık */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl text-white">
              🥗
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary">HealthyLife'a Hoş Geldiniz</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sağlıklı yaşam yolculuğunuz başlıyor
          </p>
        </div>

        {/* Kayıt Formu */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
            {/* Kişisel Bilgiler */}
            <div>
              <label className="block text-sm font-medium text-primary">
                Ad Soyad
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Adınız ve Soyadınız"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                E-posta
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="ornek@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                Şifre
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="********"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                Şifre Tekrar
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="********"
                required
              />
            </div>

            {/* Fiziksel Bilgiler */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary">
                  Boy (cm)
                </label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="175"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Kilo (kg)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="70"
                  required
                />
              </div>
            </div>

            {/* Hedef Seçimi */}
            <div>
              <label className="block text-sm font-medium text-primary">
                Hedefiniz
              </label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="lose">Kilo Vermek</option>
                <option value="gain">Kilo Almak</option>
                <option value="maintain">Kilo Korumak</option>
              </select>
            </div>
          </div>

          {/* Kayıt Ol Butonu */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Kayıt Ol
          </button>

          {/* Giriş Yap Linki */}
          <p className="text-center text-sm text-muted-foreground">
            Zaten hesabınız var mı?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Giriş Yapın
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
} 
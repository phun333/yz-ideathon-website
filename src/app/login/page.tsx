'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
          <h2 className="text-3xl font-bold text-primary">Tekrar Hoş Geldiniz</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sağlıklı yaşam yolculuğunuza devam edin
          </p>
        </div>

        {/* Giriş Formu */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                  Beni Hatırla
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Şifremi Unuttum
              </Link>
            </div>
          </div>

          {/* Giriş Yap Butonu */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Giriş Yap
          </button>

          {/* Sosyal Medya ile Giriş */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">veya</span>
            </div>
          </div>

          <div className="grid gap-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
            >
              <span className="text-xl">🌐</span>
              Google ile devam et
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
            >
              <span className="text-xl">📱</span>
              Apple ile devam et
            </button>
          </div>

          {/* Kayıt Ol Linki */}
          <p className="text-center text-sm text-muted-foreground">
            Henüz hesabınız yok mu?{' '}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Hemen Kaydolun
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
} 
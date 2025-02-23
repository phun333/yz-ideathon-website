'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/diet-plan', label: 'Diyet Planı', icon: '🥗' },
    { href: '/history', label: 'Geçmiş', icon: '📅' },
    { href: '/chat', label: 'Sohbet', icon: '💬' },
    { href: '/dietitians', label: 'Diyetisyenler', icon: '👩‍⚕️' },
  ];

  return (
    <>
      {/* Yeşil gradient üst çizgi */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <nav className="fixed top-1 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xl text-white">🥗</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-bold text-transparent">
              HealthyLife
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Masaüstü Menü */}
            <nav className="hidden md:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative p-2"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-lg transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    {item.icon}
                  </span>
                  <span className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs font-medium text-white opacity-0 transition-all group-hover:opacity-100 md:block">
                    {item.label}
                  </span>
                </Link>
              ))}
              {/* Profil İkonu */}
              <Link href="/profile" className="group relative p-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-white transition-colors hover:bg-primary/90">
                  👤
                </span>
                <span className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs font-medium text-white opacity-0 transition-all group-hover:opacity-100 md:block">
                  Demo Hesabı
                </span>
              </Link>
            </nav>

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 hover:bg-muted md:hidden"
            >
              <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="border-t border-border bg-white/80 backdrop-blur-md md:hidden">
            <div className="container space-y-1 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-lg text-primary">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border pt-4">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-primary hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-lg text-white">
                    👤
                  </span>
                  Demo Hesabı
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
} 
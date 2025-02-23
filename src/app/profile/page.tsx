export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
          👤
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Profil Bilgileri</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Kişisel Bilgiler */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Kişisel Bilgiler</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Ad Soyad"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-posta</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="E-posta"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telefon</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Telefon"
              />
            </div>
          </div>
        </div>

        {/* Sağlık Bilgileri */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Sağlık Bilgileri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Boy (cm)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Boy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kilo (kg)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Kilo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Yaş</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Yaş"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Aktivite Seviyesi</label>
              <select className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Seçiniz</option>
                <option value="sedentary">Hareketsiz</option>
                <option value="light">Az Hareketli</option>
                <option value="moderate">Orta Derece Aktif</option>
                <option value="active">Çok Aktif</option>
              </select>
            </div>
          </div>
        </div>

        {/* Hedefler */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Hedefler</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Hedef Kilo</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Hedef Kilo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Hedef Süre (Hafta)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Hedef Süre"
              />
            </div>
          </div>
        </div>

        {/* Diyet Tercihleri */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Diyet Tercihleri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Beslenme Tipi</label>
              <select className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Seçiniz</option>
                <option value="normal">Normal</option>
                <option value="vegetarian">Vejetaryen</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Glutensiz</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alerjiler</label>
              <textarea
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Varsa alerjilerinizi yazın"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
          İptal
        </button>
        <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90">
          Kaydet
        </button>
      </div>
    </div>
  );
} 
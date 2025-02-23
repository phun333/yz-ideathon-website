'use client';

import { useState } from 'react';

// Hazır konuşma verileri
const initialMessages = [
  {
    role: 'assistant',
    content: 'Merhaba! 👋 Ben sizin kişisel beslenme asistanınızım. Sağlıklı beslenme, diyet planlaması ve kalori takibi konularında size yardımcı olabilirim. Nasıl yardımcı olabilirim?'
  },
  {
    role: 'user',
    content: 'Merhaba, kilo vermek istiyorum. Nereden başlamalıyım?'
  },
  {
    role: 'assistant',
    content: 'Öncelikle sağlıklı kilo verme sürecinde size yardımcı olmaktan mutluluk duyarım! 🌟 İlk adım olarak, günlük kalori ihtiyacınızı belirleyelim. Boy, kilo ve aktivite seviyenizi öğrenebilir miyim?'
  },
  {
    role: 'user',
    content: 'Boy: 170cm, kilo: 75kg. Genelde masa başı çalışıyorum ama haftada 2-3 kez yürüyüş yapıyorum.'
  },
  {
    role: 'assistant',
    content: 'Teşekkürler! 📊 Verilerinize göre günlük kalori ihtiyacınız yaklaşık 2000 kcal. Sağlıklı kilo vermek için günde 1600-1700 kcal almanızı öneririm. İşte size başlangıç için önerilerim:\n\n1. Kahvaltı çok önemli! Protein ağırlıklı bir kahvaltı yapın (yumurta, yulaf, süt)\n2. Öğle ve akşam yemeklerinde tabağınızın:\n   - 1/2\'si sebze\n   - 1/4\'ü protein\n   - 1/4\'ü tam tahıl olmalı\n3. Günde 2-3 litre su için\n4. Ara öğünlerde meyve ve kuruyemiş tercih edin'
  },
  {
    role: 'user',
    content: 'Kahvaltıda ne yiyebilirim? Genelde vaktim olmuyor.'
  },
  {
    role: 'assistant',
    content: 'Hızlı ve sağlıklı kahvaltı önerileri 🍳:\n\n1. Pratik Seçenek:\n   - 1 kase yulaf (40g)\n   - 1 muz\n   - 1 tatlı kaşığı bal\n   - Tarçın\n   - 200ml süt\nHazırlaması 5 dakika! 🕐\n\n2. Önceden Hazırlanabilir:\n   - Overnight yulaf (akşamdan hazırlayın)\n   - Chia tohumu pudingi\n\n3. Çok Acele Durumlar İçin:\n   - 1 adet haşlanmış yumurta\n   - 1 avuç badem\n   - 1 meyve\n\nBunları yanınızda taşıyabilirsiniz! 🎒'
  },
  {
    role: 'user',
    content: 'Akşam geç saatte acıkıyorum, ne yapabilirim?'
  },
  {
    role: 'assistant',
    content: 'Gece acıkmaları için birkaç önemli öneri 🌙:\n\n1. Akşam yemeğinizi 19:00-20:00 arası yemeye çalışın\n\n2. Akşam yemeğinde mutlaka protein tüketin:\n   - Izgara tavuk/balık\n   - Mercimek\n   - Yumurta\n\n3. Geç acıkırsanız (100 kcal altı seçenekler):\n   - 1 kase light yoğurt\n   - 5-6 adet badem\n   - 1 küçük elma\n   - Bitki çayı (papatya, melisa)\n\nÖzellikle şunu unutmayın: Yatmadan 2-3 saat önce yemek yemeyi bırakın 🕰️'
  },
  {
    role: 'user',
    content: 'Bu öneriler çok yardımcı oldu, teşekkürler!'
  },
  {
    role: 'assistant',
    content: 'Rica ederim! 😊 Beslenme yolculuğunuzda size destek olmaktan mutluluk duyuyorum. Başka sorularınız olursa veya daha detaylı bir beslenme planı oluşturmak isterseniz bana yazabilirsiniz. Bol şans! 🌟'
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Demo cevap
    setTimeout(() => {
      const demoResponse = {
        role: 'assistant' as const,
        content: 'Bu bir demo uygulamasıdır. Gerçek bir AI asistanı ile konuşmuyorsunuz. Lütfen daha sonra tekrar deneyin.'
      };
      setMessages(prev => [...prev, demoResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="flex min-h-[calc(100vh-5rem)] flex-col py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4 rounded-2xl bg-primary/5 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
            🥗
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Beslenme Asistanı</h1>
            <p className="text-sm text-muted-foreground">
              Size özel diyet ve beslenme önerileri için buradayım
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 space-y-6 overflow-y-auto rounded-2xl border border-border bg-card p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-6 py-3 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white border border-border shadow-sm'
                }`}
              >
                <p className={`whitespace-pre-wrap ${
                  message.role === 'user' 
                    ? 'text-sm' 
                    : 'text-sm text-gray-800 leading-relaxed'
                }`}>{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="ml-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  👤
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl">
                🤖
              </div>
              <div className="rounded-2xl bg-white border border-border shadow-sm px-6 py-3">
                <div className="flex gap-1">
                  <span className="animate-bounce text-primary">●</span>
                  <span className="animate-bounce delay-100 text-primary">●</span>
                  <span className="animate-bounce delay-200 text-primary">●</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Mesajınızı yazın... (örn: 'Sağlıklı kahvaltı önerileri nelerdir?')"
              className="flex-1 rounded-xl border border-border bg-card px-6 py-4 text-sm shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-medium text-white transition-colors hover:bg-primary/90"
            >
              Gönder
              <span>📨</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
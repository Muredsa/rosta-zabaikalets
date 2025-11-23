import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barbershop interior" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <div className="inline-block px-3 py-1 mb-6 border border-amber-500/30 rounded bg-amber-500/10 text-amber-500 font-heading tracking-widest text-sm uppercase">
          г. Чита • ул. Ленина 105
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase leading-tight mb-6 drop-shadow-2xl">
          Твой образ — <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">твоя визитка</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Мужская парикмахерская. Стрижки любой сложности за <span className="text-amber-500 font-bold">700₽</span>. 
          Работаем без предварительной записи.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+79143527575"
            className="flex items-center justify-center gap-2 bg-amber-500 text-neutral-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition-all shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.7)] uppercase tracking-wide"
          >
            <PhoneCall size={20} />
            Позвонить сейчас
          </a>
          
          <a 
            href="https://yandex.ru/maps/?text=г. Чита, ул. Ленина, 105" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-neutral-800 text-white border border-neutral-700 px-8 py-4 rounded font-bold text-lg hover:bg-neutral-700 hover:border-neutral-600 transition-all uppercase tracking-wide"
          >
            <MapPin size={20} />
            Проложить маршрут
          </a>
        </div>
      </div>
    </section>
  );
};
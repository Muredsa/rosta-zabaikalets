import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-white uppercase mb-6 tracking-widest">Забайкалец</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Мужская территория стиля.<br/>
              Просто. Надежно. Доступно.
            </p>
          </div>

          {/* Address */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-amber-500" />
              Адрес
            </h4>
            <p className="text-neutral-400 mb-2">г. Чита, ул. Ленина, 105</p>
            <p className="text-neutral-500 text-sm">(Цокольный этаж, вход со двора)</p>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase mb-4 flex items-center gap-2">
              <Clock size={18} className="text-amber-500" />
              Режим работы
            </h4>
            <p className="text-neutral-400">Ежедневно</p>
            <p className="text-xl text-white font-heading font-bold">10:00 — 21:00</p>
          </div>

          {/* Contacts */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase mb-4 flex items-center gap-2">
              <Phone size={18} className="text-amber-500" />
              Контакты
            </h4>
            <a href="tel:+79143527575" className="text-xl text-white font-heading font-bold hover:text-amber-500 transition-colors block mb-4">
              +7 914 352-75-75
            </a>
            <a 
              href="https://yandex.ru/maps/?text=г. Чита, ул. Ленина, 105" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded border border-neutral-700 transition-colors text-sm uppercase font-bold tracking-wider"
            >
              <Navigation size={16} />
              Найти на карте
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} ЗАБАЙКАЛЕЦ. Все права защищены.</p>
          <p>Сделано для мужчин.</p>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import { Scissors, Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  highlight?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, description, highlight }) => (
  <div className={`relative p-8 rounded-xl transition-all duration-300 ${
    highlight 
      ? 'bg-neutral-800 border-2 border-amber-500 shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]' 
      : 'bg-neutral-800/40 border border-neutral-800 hover:bg-neutral-800'
  }`}>
    {highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
        Хит выбора
      </div>
    )}
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-heading font-bold text-white uppercase max-w-[70%]">{title}</h3>
      <span className="text-2xl font-heading font-bold text-amber-500">{price}</span>
    </div>
    <p className="text-neutral-400 mb-6">{description}</p>
    <ul className="space-y-2">
      <li className="flex items-center gap-2 text-sm text-neutral-300">
        <Check size={16} className="text-amber-500" />
        <span>Мытье головы включено</span>
      </li>
      <li className="flex items-center gap-2 text-sm text-neutral-300">
        <Check size={16} className="text-amber-500" />
        <span>Укладка стайлингом</span>
      </li>
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 relative">
       {/* Decorative background element */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <Scissors className="absolute -right-20 top-20 text-neutral-900 w-96 h-96 opacity-20 rotate-12" />
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-4">Наши услуги</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PriceCard 
            title="Мужская стрижка"
            price="700 ₽"
            description="Стрижка любой сложности. Фейд, классика, кроп — цена одна."
          />
          <PriceCard 
            title="Оформление бороды"
            price="700 ₽"
            description="Моделирование контура, придание формы, работа опасной бритвой."
          />
          <PriceCard 
            title="Стрижка + Борода"
            price="1 400 ₽"
            description="Комплексный уход за вашим образом. Экономим ваше время."
            highlight={true}
          />
        </div>
      </div>
    </section>
  );
};
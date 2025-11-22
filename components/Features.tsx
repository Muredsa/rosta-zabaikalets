import React from 'react';
import { Clock, Wallet, Star, LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-neutral-800/50 p-8 rounded-lg border border-neutral-800 hover:border-amber-500/30 transition-colors group">
    <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-700 group-hover:border-amber-500/50">
      <Icon size={32} className="text-amber-500" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white uppercase mb-3">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureItem 
            icon={Clock}
            title="Без записи"
            description="Не трать время на ожидание и звонки. Принимаем в живой очереди. Пришел — подстригся."
          />
          <FeatureItem 
            icon={Wallet}
            title="Фиксированная цена"
            description="Любая стрижка 700₽. Никаких скрытых доплат за «сложность» или «удлинение». Честно."
          />
          <FeatureItem 
            icon={Star}
            title="Мастера своего дела"
            description="Стрижем четко, аккуратно и со вкусом. Средний рейтинг наших мастеров 4.8 из 5."
          />
        </div>
      </div>
    </section>
  );
};
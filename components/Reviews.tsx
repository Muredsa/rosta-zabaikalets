import React from 'react';
import { Quote, Star } from 'lucide-react';

interface ReviewProps {
  text: string;
  author: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ text, author }) => (
  <div className="bg-neutral-800 p-8 rounded-lg border-l-4 border-amber-500 relative">
    <Quote className="text-neutral-700 mb-4 w-8 h-8 absolute top-6 right-6 opacity-50" />
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
      ))}
    </div>
    <p className="text-neutral-300 italic mb-6 leading-relaxed">"{text}"</p>
    <p className="font-heading font-bold text-white uppercase tracking-wider">— {author}</p>
  </div>
);

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-12 text-center">
          Что говорят <span className="text-amber-500">мужики</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard 
            text="Все четко подстригли, классно, приеду еще. Мастера понимают с полуслова, атмосфера правильная." 
            author="Алексей"
          />
          <ReviewCard 
            text="Одним словом — шик. Великолепно, обалденно. Очень аккуратно стригут. За такие деньги — лучший барбершоп в Чите." 
            author="Вячеслав"
          />
          <ReviewCard 
            text="Впечатления исключительно положительные! Быстро, без лишних разговоров, результат на 5+." 
            author="Сергей"
          />
        </div>
      </div>
    </section>
  );
};
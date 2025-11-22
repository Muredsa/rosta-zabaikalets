import React, { useState, useEffect } from 'react';
import { Phone, Scissors } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <div className="w-10 h-10 bg-amber-500 text-neutral-900 flex items-center justify-center rounded-sm shadow-lg shadow-amber-500/20">
            <Scissors size={24} strokeWidth={2.5} />
          </div>
          <span className="font-heading font-bold text-xl tracking-widest uppercase">
            Забайкалец
          </span>
        </div>

        {/* Phone Button */}
        <a 
          href="tel:+79143527575" 
          className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors group"
        >
          <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors">
            <Phone size={20} className="text-amber-500" />
          </div>
          <span className="hidden md:block font-medium text-lg">+7 914 352-75-75</span>
        </a>
      </div>
    </header>
  );
};
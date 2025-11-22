import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 font-sans selection:bg-amber-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;
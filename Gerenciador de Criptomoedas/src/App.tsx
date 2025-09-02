import { useState } from 'react';
import { Header } from './components/Header';
import { MarketPage } from './components/MarketPage';
import { PortfolioPage } from './components/PortfolioPage';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'market' | 'portfolio'>('market');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        
        {currentPage === 'market' ? <MarketPage /> : <PortfolioPage />}

        <Footer />
      </div>
    </div>
  );
}
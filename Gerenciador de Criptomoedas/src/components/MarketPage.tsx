import { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { CryptoCard } from './CryptoCard';
import { EmptyState } from './EmptyState';
import { mockCryptoData } from '../data/mockCryptoData';

export function MarketPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCryptos = useMemo(() => {
    return mockCryptoData.filter(crypto =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar por nome ou símbolo..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>

      {filteredCryptos.length === 0 && <EmptyState />}
    </div>
  );
}
import { TrendingUp, TrendingDown } from "lucide-react";
import { CryptoData } from "../data/mockCryptoData";

interface CryptoCardProps {
  crypto: CryptoData;
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const isPositive = crypto.change24h >= 0;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(price);
  };

  const formatMarketCap = (value: number) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="text-white font-bold text-lg">{crypto.symbol.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-white/90 font-medium">{crypto.name}</h3>
              <p className="text-white/60 text-sm">{crypto.symbol}</p>
            </div>
          </div>
          
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 ${
            isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="text-sm font-medium">
              {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {formatPrice(crypto.price)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-1">Market Cap</p>
            <p className="text-white/90 font-medium text-sm">{formatMarketCap(crypto.marketCap)}</p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-1">Volume 24h</p>
            <p className="text-white/90 font-medium text-sm">{formatMarketCap(crypto.volume24h)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
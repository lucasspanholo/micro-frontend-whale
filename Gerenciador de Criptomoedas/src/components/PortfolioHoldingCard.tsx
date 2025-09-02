import { TrendingUp, TrendingDown, Coins } from "lucide-react";
import { PortfolioHolding } from "../data/mockPortfolioData";

interface PortfolioHoldingCardProps {
  holding: PortfolioHolding;
}

export function PortfolioHoldingCard({ holding }: PortfolioHoldingCardProps) {
  const isProfitable = holding.profit >= 0;
  const isPositiveChange = holding.change24h >= 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatAmount = (amount: number, symbol: string) => {
    if (amount >= 1) {
      return `${amount.toLocaleString()} ${symbol}`;
    }
    return `${amount.toFixed(6)} ${symbol}`;
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="text-white font-bold text-lg">{holding.symbol.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-white/90 font-medium">{holding.name}</h3>
              <p className="text-white/60 text-sm">{holding.symbol}</p>
            </div>
          </div>
          
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 ${
            isPositiveChange ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {isPositiveChange ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span className="text-sm font-medium">
              {isPositiveChange ? '+' : ''}{holding.change24h.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Amount and Current Value */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Coins className="text-white/60" size={16} />
              <p className="text-white/70 text-sm">Quantidade</p>
            </div>
            <p className="text-white font-medium">{formatAmount(holding.amount, holding.symbol)}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-white/70 text-sm">Valor Atual</p>
            <p className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {formatCurrency(holding.totalValue)}
            </p>
          </div>
        </div>

        {/* Profit/Loss */}
        <div className="grid grid-cols-2 gap-4">
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-1">Lucro/Prejuízo</p>
            <p className={`font-medium text-sm ${
              isProfitable ? 'text-green-400' : 'text-red-400'
            }`}>
              {isProfitable ? '+' : ''}{formatCurrency(holding.profit)}
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-1">Rendimento</p>
            <p className={`font-medium text-sm ${
              isProfitable ? 'text-green-400' : 'text-red-400'
            }`}>
              {isProfitable ? '+' : ''}{holding.profitPercentage.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
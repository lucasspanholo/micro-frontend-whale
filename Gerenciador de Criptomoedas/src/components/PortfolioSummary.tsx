import { TrendingUp, TrendingDown, Wallet, DollarSign } from "lucide-react";
import { getTotalPortfolioValue, getTotalProfit, getTotalProfitPercentage } from "../data/mockPortfolioData";

export function PortfolioSummary() {
  const totalValue = getTotalPortfolioValue();
  const totalProfit = getTotalProfit();
  const profitPercentage = getTotalProfitPercentage();
  const isPositive = totalProfit >= 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const summaryStats = [
    {
      label: "Valor Total",
      value: formatCurrency(totalValue),
      icon: Wallet,
      color: "from-blue-500 to-purple-600"
    },
    {
      label: "Lucro/Prejuízo",
      value: formatCurrency(Math.abs(totalProfit)),
      icon: isPositive ? TrendingUp : TrendingDown,
      color: isPositive ? "from-green-500 to-emerald-600" : "from-red-500 to-rose-600",
      isProfit: true
    },
    {
      label: "Rendimento",
      value: `${isPositive ? '+' : ''}${profitPercentage.toFixed(2)}%`,
      icon: DollarSign,
      color: isPositive ? "from-green-500 to-emerald-600" : "from-red-500 to-rose-600",
      isProfit: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {summaryStats.map((stat, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center backdrop-blur-sm border border-white/30`}>
                <stat.icon className="text-white" size={20} />
              </div>
              {stat.isProfit && (
                <div className={`px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 ${
                  isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  <span className="text-sm font-medium">
                    {isPositive ? 'Lucro' : 'Prejuízo'}
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-white/70 text-sm mb-2">{stat.label}</h3>
            <p className={`text-2xl font-bold ${
              stat.isProfit 
                ? isPositive 
                  ? 'text-green-400' 
                  : 'text-red-400'
                : 'text-white'
            }`}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
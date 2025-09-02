import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";

interface HeaderProps {
  currentPage: 'market' | 'portfolio';
  onPageChange: (page: 'market' | 'portfolio') => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const stats = [
    { label: "Market Cap Global", value: "$2.45T", icon: DollarSign, change: "+2.3%" },
    { label: "Volume 24h", value: "$89.2B", icon: BarChart3, change: "+5.7%" },
    { label: "Dominância BTC", value: "51.2%", icon: TrendingUp, change: "-0.8%" },
  ];

  return (
    <div className="relative mb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-xl" />
      
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            CryptoManager
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Gerencie suas criptomoedas com estilo
          </p>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => onPageChange('market')}
              className={`px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                currentPage === 'market'
                  ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-blue-400/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              Mercado
            </button>
            <button
              onClick={() => onPageChange('portfolio')}
              className={`px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                currentPage === 'portfolio'
                  ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-blue-400/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              Portfólio
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <stat.icon className="text-white/80" size={20} />
                </div>
                <span className={`text-sm px-2 py-1 rounded-full backdrop-blur-sm border border-white/20 ${
                  stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-white/70 text-sm mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
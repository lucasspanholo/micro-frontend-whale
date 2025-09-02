import { PortfolioSummary } from './PortfolioSummary';
import { PortfolioChart } from './PortfolioChart';
import { PortfolioHoldingCard } from './PortfolioHoldingCard';
import { mockPortfolioHoldings } from '../data/mockPortfolioData';

export function PortfolioPage() {
  return (
    <div className="space-y-8">
      {/* Portfolio Summary */}
      <PortfolioSummary />

      {/* Portfolio Chart */}
      <PortfolioChart />

      {/* Holdings Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-sm" />
        
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Suas Criptomoedas</h2>
            <p className="text-white/60">Holdings da sua carteira</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPortfolioHoldings.map((holding) => (
              <PortfolioHoldingCard key={holding.id} holding={holding} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
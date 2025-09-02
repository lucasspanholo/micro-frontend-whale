export interface PortfolioHolding {
  id: string;
  cryptoId: string;
  name: string;
  symbol: string;
  amount: number;
  currentPrice: number;
  totalValue: number;
  change24h: number;
  purchasePrice: number;
  profit: number;
  profitPercentage: number;
}

export interface PortfolioHistoryPoint {
  date: string;
  value: number;
}

export const mockPortfolioHoldings: PortfolioHolding[] = [
  {
    id: '1',
    cryptoId: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.25,
    currentPrice: 67845.32,
    totalValue: 16961.33,
    change24h: 2.45,
    purchasePrice: 65000,
    profit: 711.33,
    profitPercentage: 4.37
  },
  {
    id: '2',
    cryptoId: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 2.5,
    currentPrice: 3892.15,
    totalValue: 9730.38,
    change24h: -1.23,
    purchasePrice: 4000,
    profit: -269.62,
    profitPercentage: -2.69
  },
  {
    id: '3',
    cryptoId: '4',
    name: 'Solana',
    symbol: 'SOL',
    amount: 15,
    currentPrice: 178.94,
    totalValue: 2684.10,
    change24h: 8.91,
    purchasePrice: 160,
    profit: 284.10,
    profitPercentage: 11.84
  },
  {
    id: '4',
    cryptoId: '6',
    name: 'Cardano',
    symbol: 'ADA',
    amount: 1000,
    currentPrice: 0.4789,
    totalValue: 478.90,
    change24h: 1.87,
    purchasePrice: 0.50,
    profit: -21.10,
    profitPercentage: -4.22
  }
];

export const mockPortfolioHistory: PortfolioHistoryPoint[] = [
  { date: '2024-07-01', value: 25000 },
  { date: '2024-07-15', value: 26500 },
  { date: '2024-08-01', value: 24800 },
  { date: '2024-08-15', value: 27200 },
  { date: '2024-09-01', value: 28900 },
  { date: '2024-09-15', value: 26700 },
  { date: '2024-10-01', value: 29400 },
  { date: '2024-10-15', value: 31200 },
  { date: '2024-11-01', value: 28800 },
  { date: '2024-11-15', value: 30100 },
  { date: '2024-12-01', value: 32500 },
  { date: '2024-12-15', value: 29854.71 }
];

export const getTotalPortfolioValue = () => {
  return mockPortfolioHoldings.reduce((total, holding) => total + holding.totalValue, 0);
};

export const getTotalProfit = () => {
  return mockPortfolioHoldings.reduce((total, holding) => total + holding.profit, 0);
};

export const getTotalProfitPercentage = () => {
  const totalValue = getTotalPortfolioValue();
  const totalProfit = getTotalProfit();
  const totalInvestment = totalValue - totalProfit;
  return totalInvestment > 0 ? (totalProfit / totalInvestment) * 100 : 0;
};
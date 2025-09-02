export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  icon: string;
}

export const mockCryptoData: CryptoData[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 67845.32,
    change24h: 2.45,
    marketCap: 1334567890000,
    volume24h: 23456789000,
    icon: '₿'
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3892.15,
    change24h: -1.23,
    marketCap: 467890123000,
    volume24h: 12345678000,
    icon: 'Ξ'
  },
  {
    id: '3',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 589.67,
    change24h: 4.56,
    marketCap: 85432109000,
    volume24h: 1234567000,
    icon: 'B'
  },
  {
    id: '4',
    name: 'Solana',
    symbol: 'SOL',
    price: 178.94,
    change24h: 8.91,
    marketCap: 82345678000,
    volume24h: 3456789000,
    icon: 'S'
  },
  {
    id: '5',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.6234,
    change24h: -3.45,
    marketCap: 35678901000,
    volume24h: 1567890000,
    icon: 'X'
  },
  {
    id: '6',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.4789,
    change24h: 1.87,
    marketCap: 16789012000,
    volume24h: 567890000,
    icon: 'A'
  },
  {
    id: '7',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.1567,
    change24h: 12.34,
    marketCap: 22890123000,
    volume24h: 2345678000,
    icon: 'D'
  },
  {
    id: '8',
    name: 'Polygon',
    symbol: 'MATIC',
    price: 0.8945,
    change24h: -2.11,
    marketCap: 8901234000,
    volume24h: 789012000,
    icon: 'M'
  }
];
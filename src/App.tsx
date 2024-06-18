import React, { useState } from 'react';
import StockList from './components/StockList';
import Portfolio from './components/Portfolio';
import { getStockDetails } from './api/finnhub';

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<{ symbol: string, name: string, sector: string, price: number }[]>([]);

  const handleSelectStock = async (stock: { symbol: string, name: string, sector: string }) => {
    const details = await getStockDetails(stock.symbol);
    setPortfolio([...portfolio, { ...stock, price: details.c }]);
  };

  return (
    <div>
      <h1>Stock Portfolio Diversity Calculator</h1>
      <StockList onSelect={handleSelectStock} />
      <Portfolio portfolio={portfolio} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { getStocks } from '../api/finnhub';

interface Stock {
  symbol: string;
  name: string;
  sector: string;
}

const StockList: React.FC<{ onSelect: (stock: Stock) => void }> = ({ onSelect }) => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    getStocks().then(setStocks);
  }, []);

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol} onClick={() => onSelect(stock)}>
            {stock.name} ({stock.symbol}) - {stock.sector}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;

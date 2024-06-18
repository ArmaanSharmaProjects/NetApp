import React from 'react';
import { calculateDiversity } from '../utils/calculateDiversity';

interface PortfolioProps {
  portfolio: { symbol: string, name: string, sector: string, price: number }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const diversity = calculateDiversity(portfolio);

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.map(stock => (
          <li key={stock.symbol}>
            {stock.name} ({stock.symbol}) - {stock.sector} - ${stock.price}
          </li>
        ))}
      </ul>
      <h3>Diversity Score: {diversity.toFixed(2)}</h3>
    </div>
  );
};

export default Portfolio;

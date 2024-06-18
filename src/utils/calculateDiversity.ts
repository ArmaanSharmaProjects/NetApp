export const calculateDiversity = (portfolio: { sector: string, price: number }[]) => {
    const total = portfolio.reduce((acc, stock) => acc + stock.price, 0);
    const sectorWeights: { [key: string]: number } = {};
  
    portfolio.forEach(stock => {
      if (!sectorWeights[stock.sector]) {
        sectorWeights[stock.sector] = 0;
      }
      sectorWeights[stock.sector] += stock.price / total;
    });
  
    let diversity = 0;
    for (const sector in sectorWeights) {
      diversity += sectorWeights[sector] ** 2;
    }
  
    return (1 - diversity) * 100;
  };
  
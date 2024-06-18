import axios from 'axios';

const API_KEY = 'cplujshr01qn8g1vcf4gcplujshr01qn8g1vcf50'; 
const BASE_URL = 'https://finnhub.io/api/v1/';

export const getStocks = async () => {
  const response = await axios.get(`${BASE_URL}stock/symbol?exchange=US`, {
    params: { token: API_KEY }
  });
  return response.data;
};

export const getStockDetails = async (symbol: string) => {
  const response = await axios.get(`${BASE_URL}quote?symbol=${symbol}`, {
    params: { token: API_KEY }
  });
  return response.data;
};

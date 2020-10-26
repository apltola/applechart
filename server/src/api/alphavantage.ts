import axios from 'axios';

export default function (fn: string) {
  return axios.create({
    baseURL: `https://www.alphavantage.co/query?function=${fn}&symbol=AAPL&apikey=LQS7ZT68XMIZEFHS`,
  });
}

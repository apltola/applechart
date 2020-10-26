import axios from 'axios';

/* export default function (fn: string) {
  return axios.create({
    baseURL: `https://www.alphavantage.co/query?function=${fn}&symbol=AAPL&outputsize=full&apikey=LQS7ZT68XMIZEFHS`,
  });
} */

export default axios.create({
  baseURL: `https://www.alphavantage.co/query`,
});

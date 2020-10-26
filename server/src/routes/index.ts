import express, { Request, Response } from 'express';
import alphavantageApi from '../api/alphavantage';
const FN = 'TIME_SERIES_DAILY_ADJUSTED';
const SYMBOL = 'AAPL';
const KEY = 'LQS7ZT68XMIZEFHS';
const SIZE = 'full';

const router = express.Router();

router.get('/api/daily', async (req: Request, res: Response) => {
  //'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=LQS7ZT68XMIZEFHS'

  const response = await alphavantageApi.get(
    `?function=${FN}&symbol=${SYMBOL}&outputsize=${SIZE}&apikey=${KEY}`
  );

  const timeSeries = response.data['Time Series (Daily)'];
  const data = [];
  for (const key in timeSeries) {
    if (timeSeries.hasOwnProperty(key)) {
      const element = timeSeries[key];
      const time = new Date(key).getTime();
      const close = parseFloat(element['5. adjusted close']);
      data.push([time, close]);
    }
  }
  data.reverse();

  res.send(data);
});

export default router;

import express, { Request, Response } from 'express';
import alphavantageApi from '../api/alphavantage';
import formatTimeSeries from '../util/formatTimeSeries';
const FN: string = 'TIME_SERIES_DAILY_ADJUSTED';
const SYMBOL: string = 'AAPL';
const KEY: string = 'LQS7ZT68XMIZEFHS';
const SIZE: string = 'full';

const router = express.Router();

router.get('/api/daily', async (req: Request, res: Response) => {
  const response = await alphavantageApi.get(
    `?function=${FN}&symbol=${SYMBOL}&outputsize=${SIZE}&apikey=${KEY}`
  );

  const timeSeries = response.data['Time Series (Daily)'];
  const data = formatTimeSeries(timeSeries, '5. adjusted close');

  res.send(data);
});

export default router;

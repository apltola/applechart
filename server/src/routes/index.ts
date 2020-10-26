import express, { Request, Response } from 'express';
import buildApiClient from '../api/alphavantage';

const router = express.Router();

router.get('/api/daily', async (req: Request, res: Response) => {
  //'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=LQS7ZT68XMIZEFHS'

  const api = buildApiClient('TIME_SERIES_DAILY');
  const response = await api.get('');
  //console.log(response.data);
  res.send(response.data['Time Series (Daily)']);
});

export default router;

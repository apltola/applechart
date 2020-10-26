import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();
app.use(cors());

app.use(router);

app.get('/api', (req, res) => {
  res.send('hello this is the api root');
});

app.get('/status', (req, res) => {
  res.send(`server is online, node_env: ${process.env.NODE_ENV}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server listening @ 3001');
});

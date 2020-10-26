import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();
app.use(cors());

app.use(router);

app.get('/status', (req, res) => {
  res.send(`server is online`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening @ ${PORT}`);
});

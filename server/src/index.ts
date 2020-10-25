import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send('hello this is the api root');
});

app.get('/status', (req, res) => {
  res.send("I'm alive!!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server v2 listening @ 3001');
});

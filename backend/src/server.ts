import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
// import { getConnectionOptions } from 'typeorm';

import { router } from './routes';

import './database';

// getConnectionOptions().then(conteudo => {
//   console.log(JSON.stringify(conteudo));
// });

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ msg: 'WR5 Back end!' });
});
app.use(router);

app.listen(3333, () => console.log('Server is running!'));

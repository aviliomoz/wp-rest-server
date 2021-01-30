import api from './api';

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});

mongoose.connect(
  process.env.DB_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw new mongoose.Error(err.message);
    console.log('Data Base running');
  },
);

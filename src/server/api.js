import express from 'express';

import usersRouter from './routes/users';
import categoriesRouter from './routes/categories';
import productsRouter from './routes/products';
import loginRouter from './routes/login';
import imageRouter from './routes/image';
import uploadRouter from './routes/upload';

const api = express();

//ROUTES
api.use('/users', usersRouter);
api.use('/categories', categoriesRouter);
api.use('/products', productsRouter);
api.use('/login', loginRouter);
api.use('/image', imageRouter);
api.use('/upload', uploadRouter);

export default api;

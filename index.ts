import express from 'express';
import movies from './routes/movies';
import { validationHandler } from './utils/middlewares/validationHandler';
import {
  errorHandler,
  logErrors,
  wrapErrors,
} from './utils/middlewares/errorHandler';
import { notFoundHandler } from './utils/middlewares/notFoundHandler';

const app: express.Application = express();

app.use(express.json());

// Routes
movies(app);

// Catch 404
app.use(notFoundHandler);

// Error Midlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(3000, () => console.log('Server on port 3000'));

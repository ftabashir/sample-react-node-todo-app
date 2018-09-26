import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { TodoController } from './controllers';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3000);

app.use('/api/todos', TodoController);

export default app;

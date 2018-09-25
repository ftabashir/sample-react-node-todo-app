import express from 'express';
import { TodoController } from './controllers';

const app: express.Application = express();

app.use('/api/todo', TodoController);
app.set('port', process.env.PORT || 3000);

export default app;

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import apolloServer from './graphql';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
apolloServer.applyMiddleware({ app });

const dbUrl = 'mongodb://localhost/todo-db';
mongoose.connect(dbUrl, (err) => {
    if (err) {
        console.error(err.message);
        console.error(err);
    }
    else {
        console.log('✅  Connected to MongoDb');
    }
});

app.listen({ port: PORT }, () => {
    const serverUrl = `http://localhost:${PORT}${apolloServer.graphqlPath}`;
    console.log(`🚀  Server ready at ${serverUrl} in ${app.get('env')} mode`);
});

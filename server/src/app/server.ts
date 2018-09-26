import app from './app';
import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost/todo-db';
mongoose.connect(dbUrl, (err) => {
    if (err) {
        console.error(err.message);
        console.error(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});

const server = app.listen(app.get('port'), () => {
    console.log(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
});

export default server;

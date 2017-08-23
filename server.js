import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes.js';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gesta1');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
	console.log('Up and Running !');
});

routes(app);
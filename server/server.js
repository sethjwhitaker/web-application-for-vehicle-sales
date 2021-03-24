import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

import Router from './router';

dotenv.config();

const port = process.env.PORT || 80;
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use("/dist", express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(cookieParser());
Router(app);
const server = app.listen(port, () => {
    console.log(`Vehicle Sales Web App server started on port ` + port);
});
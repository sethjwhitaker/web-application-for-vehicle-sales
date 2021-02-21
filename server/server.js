import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import testTable from './testTable';

const port = process.env.PORT || 80;
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

testTable(app);
const server = app.listen(port, () => {
    console.log(`Websocket server started on port ` + port);
});
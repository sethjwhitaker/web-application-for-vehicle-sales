import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import testTable from './testTable';

const port = process.env.PORT || 80;
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use("/dist", express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
testTable(app);
const server = app.listen(port, () => {
    console.log(`Vehicle Sales Web App server started on port ` + port);
});
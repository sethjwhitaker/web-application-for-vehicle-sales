import express from 'express';
import path from 'path';

const port = process.env.PORT || 80;
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
const server = app.listen(port, () => {
    console.log(`Websocket server started on port ` + port);
});
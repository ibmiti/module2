import express, { static } from 'express';
const app     = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(static('public'));
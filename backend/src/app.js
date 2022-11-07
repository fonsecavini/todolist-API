const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);

app.get('/', (req, res) => res.status(200).send('Tá tudo certo'));

module.exports = app;
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./routes/api');
const auth = require('./routes/auth');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/cadlicit', { useNewUrlParser: true, useUnifiedTopology: true });

// Rotas

app.use('/api', api);
app.use('/auth', auth);

app.use((req, res, next) => {
  res.status(404).send('Rota não encontrada');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

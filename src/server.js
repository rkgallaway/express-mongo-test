'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const personModel = require('./models/person');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/people', async (req, res, next) => {
  let people = await personModel.find();
  res.status(200).send(people);
});

app.post('/people', async (req, res, next) => {
  console.log('req body.....', req.body);
  let newPerson = await personModel.create(req.body);
  res.status(200).send(newPerson);
});

function start(){
  app.listen(PORT, () => console.log('Listening on port', PORT));
}

module.exports = { app, start };

'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const messages = require('./routes/messages');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/messages', messages);

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;

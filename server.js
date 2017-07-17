'use strict';

const express = require('express');
const app = express();

const messages = require('./routes/messages');

app.use('/messages',messages);

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;

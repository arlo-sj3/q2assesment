'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

// const sql = knex('messages').toString();

// console.log(sql);

// knex.destroy();

module.exports = knex;

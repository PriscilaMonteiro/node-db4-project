const knex = require('knex');
const settings = require('../knexfile');
const enviroment = process.env.NODE_ENV || "development";

module.exports = knex(settings[enviroment]);
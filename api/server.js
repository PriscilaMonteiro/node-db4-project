const express = require('express');
const helmet = require('helmet')

const recipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.use('*', (req, res) => {
  res.json({api: 'api wired'})
});

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Relational Databases using Recipe book as an example'})
});

module.exports = server
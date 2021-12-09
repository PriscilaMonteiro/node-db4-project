const router = require('express').Router();

const Recipe = require('./recipes-model');

const {
  handleError,
} = require('./recipes-middleware')



router.use(handleError);

module.exports = router
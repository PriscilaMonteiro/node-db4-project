const Recipes = require('../recipes/recipes-model');

function handleError(err, req, res, next) { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    prodMessage: 'something went really wrong!',
    stack: err.stack,
  });
}

module.exports = {
  handleError,
}

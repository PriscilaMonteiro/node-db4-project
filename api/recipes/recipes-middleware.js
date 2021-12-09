const dbConfig = require('../../data/db-config');
const Recipes = require('../recipes/recipes-model');

function handleError(err, req, res, next) { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    prodMessage: 'something went really wrong!',
    stack: err.stack,
  });
}

const checkRecipeId = async (req, res, next) => {
  try {
    const existing = await dbConfig('recipes')
      .where('recipe_id', req.params.recipe_id)
      .first()
    if(!existing) {
      next({
        status:404,
        message: `Recipe with recipe_id ${req.params.recipe_id} not found`,
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  handleError,
  checkRecipeId,
}

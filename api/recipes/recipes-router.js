const router = require('express').Router();

const Recipes = require('./recipes-model');

const {
  handleError,
  checkRecipeId,
} = require('./recipes-middleware');



router.use(handleError);

router.get('/', (req, res, next) => {
  Recipes.find()
  .then(recipes => {
    res.json(recipes)
  })
  .catch(next)
})

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
  const { recipe_id } = req.params

  Recipes.findById(recipe_id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(next)
})

module.exports = router
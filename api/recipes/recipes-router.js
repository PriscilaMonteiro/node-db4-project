const router = require('express').Router();

const Recipes = require('./recipes-model');

const {
  handleError,
} = require('./recipes-middleware');



router.use(handleError);

router.get('/', (req, res, next) => {
  Recipes.find()
  .then(recipes => {
    res.json(recipes)
  })
  .catch(next)
})

module.exports = router
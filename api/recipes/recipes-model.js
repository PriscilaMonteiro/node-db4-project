const db = require('../../data/db-config');

async function find() {
  const rows = await db ('recipes')
return rows
}


async function findById(recipe_id) {
  const rows = await db ('recipes', 'ingredients')
    .leftJoin('steps', 'recipes.recipe_id', 'steps.recipe_id' )
    .where('recipes.recipe_id', recipe_id)
    // .orderBy('steps.step_number')
  // console.log (rows)

  const result = { instructions: []}
  result.recipe_id = rows[0].recipe_id
  result.recipe_name = rows[0].recipe_name

  rows.forEach(row => {
    if (row.step_id) {
      result.instructions.push({
        // step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions, 
      })
    }
  })
  return result
}



module.exports = {
  find,
  findById,
}
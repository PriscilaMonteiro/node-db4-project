exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 256).notNullable().unique()
    })
    .createTable('steps', table => {
      table.increments('step_id')
      // table.datatype
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id')
      // table.datatype
    }) 
    .createTable('steps_ingredients', table => {
      table.increments('step_ingredient_id')
      // table.datatype
    })
  
};

exports.down = function(knex) {
  
};

exports.up = function(knex) {
  return knex.schema.createTable("recipe_ingredients", table => {
    table.increments();

    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("cascade")
      .onUpdate("cascade");

    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("restrict")
      .onUpdate("cascade");

    table.float("quantity");
    notNullable();

    table.string("measurement").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};

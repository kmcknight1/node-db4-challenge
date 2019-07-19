exports.up = function(knex) {
  return knex.schema.createTable("recipes", table => {
    table.increments();

    table
      .string("name")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};

exports.up = function(knex) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();

    table
      .string("name")
      .unique()
      .notNullable();

    table.string("unitOfMeasurement").defaultsTo("grams");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};

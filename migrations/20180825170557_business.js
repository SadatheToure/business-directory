
exports.up = function(knex, Promise) {
  return knex.schema.createTable("business", (table) => {
    table.increments()
    table.text('image')
    table.text("name")
    table.text("address")
    table.string("number")
    table.text("website")
    table.integer("zipcode")
    table.text("category")
    table.text("hours")
    table.text("summary")
    table.text('social')
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("business")
};

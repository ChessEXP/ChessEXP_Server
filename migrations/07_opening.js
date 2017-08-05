exports.up = function(knex, Promise) {
  return knex.schema.createTable('opening', (table) => {// non-relational

  table.increments('id').primary();
  table.text('openingName').notNullable();
  table.text('fenString').notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('opening');

};

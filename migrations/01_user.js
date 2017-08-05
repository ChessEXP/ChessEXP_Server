exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {

    table.increments('id').primary();
    table.text('userName').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.datetime('date').notNullable();
    table.boolean('isActive').defaultTo(true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');

};

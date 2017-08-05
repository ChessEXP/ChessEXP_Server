exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', (table) => {

    table.increments('id').primary();
    table.json('goals'); // Web-Sockets
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('user.id');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goal');
};

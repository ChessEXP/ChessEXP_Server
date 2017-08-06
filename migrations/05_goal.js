exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', (table) => {

    table.increments('id').primary();
    table.json('goals'); // Web-Sockets
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goal');
};

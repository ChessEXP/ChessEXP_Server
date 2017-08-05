exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', (table) => {

    table.increments('id').primary();
    table.text('goal').notNullable(); // Web-Sockets
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('user.id');
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goal');
};

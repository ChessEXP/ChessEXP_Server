exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {

    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('user.id');
    table.text('message').notNullable(); // Web-Sockets

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment');

};

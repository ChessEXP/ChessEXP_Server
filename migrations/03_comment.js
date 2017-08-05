exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {

    table.increments('id').primary();
    table.json('chatLog');
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment');

};

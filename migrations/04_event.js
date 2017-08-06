exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', (table) => {

    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('host').notNullable();
    table.text('location').notNullable();
    table.text('description').notNullable();
    table.text('image').notNullable();
    table.integer('rsvplist_id').references('rsvplist.id').unsigned().onDelete('cascade');
    table.integer('comment_id').references('comment.id').unsigned().onDelete('cascade');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event');

};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', (table) => {

    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('host').notNullable();
    table.text('location').notNullable();
    table.text('description').notNullable();
    table.text('image').notNullable();
    table.integer('rsvplist_id').unsigned();
    table.foreign('rsvplist_id').references('rsvplist.id');
    table.integer('comment_id').unsigned();
    table.foreign('comment_id').references('comment.id');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event');

};

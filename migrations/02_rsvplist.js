exports.up = function(knex, Promise) {
  return knex.schema.createTable('rsvplist', (table) => {

    table.increments('id').primary();
    // table.text('name').notNullable(); //convert to JWT google auth
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('user.id');
    // table.integer('event_id').unsigned();
    // table.foreign('event_id').references('event.id');// make a join instead
    table.boolean('isAttending').defaultTo(true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rsvplist');

};

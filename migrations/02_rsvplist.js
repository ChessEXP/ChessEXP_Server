exports.up = function(knex, Promise) {
  return knex.schema.createTable('rsvplist', (table) => {

    table.increments('id').primary();
    table.json('attendees').notNullable();
    table.boolean('waitlist').defaultTo(false);
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rsvplist');

};

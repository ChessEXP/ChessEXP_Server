exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE rsvplist RESTART IDENTITY CASCADE;').then(() => {

    const RSVP = [
      {
        user_id: 6,
        user_id: 1
      },{
        user_id: 6
      }, {
        user_id: 4,
        user_id: 5
      }
    ];

    return knex('rsvplist').insert(RSVP);
  });
}

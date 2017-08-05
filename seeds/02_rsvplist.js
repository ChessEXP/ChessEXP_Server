exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE rsvplist RESTART IDENTITY CASCADE;').then(() => {

    const RSVP = [
      {
        attendees: JSON.stringify(['BaconLover', 'JohnAppleseedling', 'uberpawnage', 'chessbrah'])
      }, {
        attendees: JSON.stringify(['ChessMan', 'tacoCat', 'uberpawnage', 'Fellow'])
      }, {
        attendees: JSON.stringify(['Mike', 'Rachel', 'Sarah'])
      }
    ];

    return knex('rsvplist').insert(RSVP);
  });
}

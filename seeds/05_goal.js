exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE goal RESTART IDENTITY CASCADE;').then(() => {

    const Goals = [
      {
        goals: JSON.stringify(['Reach a 1000+ rating.', 'Play 3 games a day', 'Build confidence to tell my GF\'s parents I secretly play chess behind her back.', 'Never Resign a game if down a minor piece.']),
        user_id: 1
      }
    ];

    return knex('goal').insert(Goals);
  });
}

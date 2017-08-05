const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;').then(() => {

    const Users = [
      {
        userName: 'Fellow',
        email: 'Fellowship@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'dragon20',
        email: 'DragonDor20k@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'BaconLover',
        email: 'baconADD@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'ChessMan',
        email: 'anexample@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'uberpawnage',
        email: 'john.doe@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'tacoCat',
        email: 'tacocatfoodtruck@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'WeeMan33',
        email: 'wm@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'JohnAppleseedling',
        email: 'clicheemail@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'chessbrah',
        email: 'chessbrahk@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }, {
        userName: 'magnusCarlsen',
        email: 'magcar@example.com',
        password: bcrypt.hashSync('testpass123'),
        created_at: new Date()
      }
    ];

    return knex('user').insert(Users);
  });
}

const knex = require('../connection');

module.exports = {
  getAll: () => {
    return knex('user')
          .distinct('id', 'userName', 'created_at');
  }
}

const knex = require('../connection');

module.exports = {

  getAllOpenings: () => {
    return knex("opening");
  },

  getOneOpening: (id) => {
    return knex("opening").where('id', id).first();
  },

  createOpening: (opening) => {
    return knex('opening').insert(opening);
  },

  updateOpening: (opening_id, opening) => {
    return knex('opening').where('id', opening_id).update(opening, '*');
  },

  deleteOpening: (opening_id) => {
    return knex('opening').where('id', opening_id).del();
  }

}

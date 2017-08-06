const knex = require('../connection');

module.exports = {

  getAllGoals: () => {
    return knex("goal");
  },

  getOneGoal: (id) => {
    return knex("goal").where('id', id).first();
  },

  createGoal: (goal) => {
    return knex('goal').insert(goal);
  },

  updateGoal: (goal_id, goal) => {
    return knex('goal').where('id', goal_id).update(goal, '*');
  },

  deleteGoal: (goal_id) => {
    return knex('goal').where('id', goal_id).del();
  }

}

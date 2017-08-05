exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE comment RESTART IDENTITY CASCADE;').then(() => {

    const Comments = [
      {
        chatLog: JSON.stringify([
          {
            user_id: 1,
            message: 'Whaaat'
          }, {
            user_id: 1,
            message: "be there at 3"
          }, {
            user_id: 1,
            message: 'OTB style'
          }, {
            user_id: 4,
            message: 'Heeeeeeeeeeeeeeeeey'
          }, {
            user_id: 8,
            message: 'A typical message'
          }
        ])
      }, {
        chatLog: JSON.stringify([
          {
            user_id: 4,
            message: 'Sipping the proverbial tea of defeat'
          }, {
            user_id: 6,
            message: 'Uber Pawnage'
          }, {
            user_id: 5,
            message: 'Meeting at the Bar soon.'
          }, {
            user_id: 3,
            message: 'I destroyed a blind man on the board because he looked at me wrong.'
          }
        ])
      }, {
        chatLog: JSON.stringify([
          {
            user_id: 2,
            message: 'You guys are going down to China Town...Central-Park-District-Court.. Town'
          }, {
            user_id: 7,
            message: 'I like Turtles!'
          }, {
            user_id: 2,
            message: 'I like Turtles!'
          }, {
            user_id: 4,
            message: 'lets go with chess 960'
          }
        ])
      }
    ];

    return knex('comment').insert(Comments);
  });
}

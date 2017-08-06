const knex = require('../connection');

module.exports = {

  createEvent: (id, eventBody) => {
             return knex('rsvplist')
                        .insert({
                          attendees: JSON.stringify(['♞'])
                        }, '*')
                        .then((rsvpData) => {
                          return knex('comment').insert({
                            chatLog: JSON.stringify(['💬'])
                          }, '*')
                          .then((data) => {
                            return knex('event')
                            .insert({title: eventBody.title,
                                     host: eventBody.host,
                                     location: eventBody.location,
                                     description: eventBody.description,
                                     image: eventBody.image,
                                     rsvplist_id: id,
                                     comment_id: id
                                   }, '*')
                          }).then((result) => {
                            return result;
                          });
                        });
  },

  getEvents: () => {
    return knex('event')
                .join('rsvplist', 'rsvplist_id', '=', 'rsvplist.id')
                .join('comment', 'comment_id', '=', 'comment.id');
  },

  getEventById: (id) => {
    return knex('event')
                .join('rsvplist', 'rsvplist_id', '=', 'rsvplist.id')
                .join('comment', 'comment_id', '=', 'comment.id')
                .where('event.id', id).first();
  },

  updateEventById: (id, eventBody) => {
    return knex('event').where('id', id).first().update(eventBody, '*');
  },

  updateRSVPById: (id, rsvpBody) => {
    return knex('rsvplist').where('id', id).first().update(rsvpBody, '*');
  },

  updateChatLogById: (id, rsvpBody) => {
    return knex('comment').where('id', id).first().update(rsvpBody, '*');
  },

  deleteEventById: (id) => {// will delete all by cascade
    return knex('event').where('id', id).del();
  },

}

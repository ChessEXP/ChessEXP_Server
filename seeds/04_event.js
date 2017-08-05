exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE event RESTART IDENTITY CASCADE;').then(() => {

    const Events = [
      {
        title: 'The DarkNight Invitational',
        host: 'Nick',
        location: 'Leela\'s European Cafe',
        description: 'Dress in black, the nights going to get nerdy!',
        image: 'http://4.bp.blogspot.com/-ZOSLPOZZEXo/Upak5jrjj_I/AAAAAAAAHLw/ob0lc_Xe53g/s1600/psychedelic-owl-gothic.jpg',
        rsvplist_id: 1,
        comment_id: 1
      }, {
        title: 'Denver Open',
        host: 'Rachel',
        location: 'Washington Park',
        description: 'Bring your boards and win prize money.',
        image: 'http://res.cloudinary.com/simpleview/image/upload/v1476809593/clients/denver/denver_union_station_exterior_2015_991321c8-7b2b-4f91-bd96-1c8826647822.jpg',
        rsvplist_id: 2,
        comment_id: 2
      }, {
        title: 'Trident BYOBoard',
        host: 'Mark',
        location: 'Trident Cafe',
        description: 'Bring your boards and win prize money.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/03/b9/19/trident-booksellers-cafe.jpg',
        rsvplist_id: 3,
        comment_id: 3
      }
    ];

    return knex('event').insert(Events);
  });
}

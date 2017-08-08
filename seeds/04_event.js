exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE event RESTART IDENTITY CASCADE;').then(() => {

    const Events = [
      {
        title: 'DarkNight Invitational',
        host: 'Nick',
        location: 'Leela\'s European Cafe',
        description: 'Dress in black',
        image: 'http://4.bp.blogspot.com/-ZOSLPOZZEXo/Upak5jrjj_I/AAAAAAAAHLw/ob0lc_Xe53g/s1600/psychedelic-owl-gothic.jpg',
        rsvplist_id: 1,
        comment_id: 1
      }, {
        title: 'Denver Open',
        host: 'Rachel',
        location: 'Washington Park',
        description: 'Bring your board and win prize money.',
        image: 'http://res.cloudinary.com/simpleview/image/upload/v1476809593/clients/denver/denver_union_station_exterior_2015_991321c8-7b2b-4f91-bd96-1c8826647822.jpg',
        rsvplist_id: 2,
        comment_id: 2
      }, {
        title: 'Trident BYOBoard',
        host: 'Mark',
        location: 'Trident Cafe',
        description: 'Have some Fun OTB.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/03/b9/19/trident-booksellers-cafe.jpg',
        rsvplist_id: 3,
        comment_id: 3
      },{
        title: 'Lakewood Simul',
        host: 'Nick',
        location: 'Leela\'s European Cafe',
        description: 'Nerd-town, population you!',
        image: 'http://oxfordstudent.com/wp-content/uploads/2014/02/Final-Chess-Poster-Design.jpg',
        rsvplist_id: 1,
        comment_id: 1
      }, {
        title: 'Fischer 960',
        host: 'Rachel',
        location: 'Gin Mill',
        description: 'Round Robin',
        image: 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.86.720.720/12965186_982615538485653_1517285963_n.jpg?ig_cache_key=MTIyMDgyOTc3MzU4Mjk5NzU4Mg%3D%3D.2.c',
        rsvplist_id: 2,
        comment_id: 2
      }, {
        title: 'Lessons Pt. 2',
        host: 'Michelle',
        location: 'Fluid Coffee-Bar',
        description: 'Speed Games',
        image: 'http://chesshall.org/wp-content/uploads/2016/12/speed-chess-clock.jpg',
        rsvplist_id: 3,
        comment_id: 3
      }, {
        title: 'DarkNight Invitational',
        host: 'Nick',
        location: 'Leela\'s European Cafe',
        description: 'Dress in black',
        image: 'http://4.bp.blogspot.com/-ZOSLPOZZEXo/Upak5jrjj_I/AAAAAAAAHLw/ob0lc_Xe53g/s1600/psychedelic-owl-gothic.jpg',
        rsvplist_id: 1,
        comment_id: 1
      }, {
        title: 'Denver Open',
        host: 'Rachel',
        location: 'Washington Park',
        description: 'Bring your board and win prize money.',
        image: 'http://res.cloudinary.com/simpleview/image/upload/v1476809593/clients/denver/denver_union_station_exterior_2015_991321c8-7b2b-4f91-bd96-1c8826647822.jpg',
        rsvplist_id: 2,
        comment_id: 2
      }, {
        title: 'Trident BYOBoard',
        host: 'Mark',
        location: 'Trident Cafe',
        description: 'Have some Fun OTB.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/03/b9/19/trident-booksellers-cafe.jpg',
        rsvplist_id: 3,
        comment_id: 3
      },{
        title: 'Lakewood Simul',
        host: 'Nick',
        location: 'Leela\'s European Cafe',
        description: 'Nerd-town, population you!',
        image: 'http://oxfordstudent.com/wp-content/uploads/2014/02/Final-Chess-Poster-Design.jpg',
        rsvplist_id: 1,
        comment_id: 1
      }, {
        title: 'Fischer 960',
        host: 'Rachel',
        location: 'Gin Mill',
        description: 'Round Robin',
        image: 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.86.720.720/12965186_982615538485653_1517285963_n.jpg?ig_cache_key=MTIyMDgyOTc3MzU4Mjk5NzU4Mg%3D%3D.2.c',
        rsvplist_id: 2,
        comment_id: 2
      }, {
        title: 'Lessons Pt. 2',
        host: 'Michelle',
        location: 'Fluid Coffee-Bar',
        description: 'Speed Games',
        image: 'http://chesshall.org/wp-content/uploads/2016/12/speed-chess-clock.jpg',
        rsvplist_id: 3,
        comment_id: 3
      }
    ];

    return knex('event').insert(Events);
  });
}

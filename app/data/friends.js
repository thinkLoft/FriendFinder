// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: 'Ahmed',
    photo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/South_park_muhammad.jpg/220px-South_park_muhammad.jpg',
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: 'Bob the Builder',
    photo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Bob_the_builder.jpg/220px-Bob_the_builder.jpg',
    scores: [3, 2, 1, 5, 5, 1, 5, 5, 3, 4]
  },
  {
    name: 'Dora the Explorer',
    photo: 'http://www.ottawacitizen.com/cms/binary/11102915.jpg',
    scores: [1, 5, 2, 2, 1, 5, 4, 1, 2, 5]
  },
  {
    name: 'Mickey Mouse',
    photo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
    scores: [5, 5, 5, 4, 5, 3, 4, 5, 4, 3]
  },
  {
    name: 'Mini Mouse',
    photo:
      'https://vignette.wikia.nocookie.net/villains/images/4/45/Daffy_Duck_Official.png',
    scores: [1, 1, 1, 2, 1, 3, 2, 1, 2, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;

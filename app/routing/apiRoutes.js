// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });

  app.post('/api/friends', function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

    // Variable to save closest match
    var closestMatch = {
      friend: undefined,
      difference: undefined
    };

    // grab User Input
    var userScore = req.body.scores;
    var difference;

    // convert User Input to integer
    for (i = 0; i < userScore.length; i++) {
      userScore[i] = parseInt(userScore[i].trim(), 10);
    }

    // Loop to compare user Input with each Friend
    for (i = 0; i < friendData.length; i++) {
      comparedUser = friendData[i].scores;
      difference = 0;

      // loop to compare scores
      for (x = 0; x < userScore.length; x++) {
        difference += Math.abs(userScore[x] - comparedUser[x]);
      }

      // Logic to check the difference
      if (
        difference < closestMatch.difference ||
        closestMatch.difference === undefined
      ) {
        closestMatch.friend = friendData[i];
        closestMatch.difference = difference;
      }
    }
    // Return closest match object
    res.json(closestMatch.friend);
  });
};

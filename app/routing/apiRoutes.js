var gamers = require("../data/friends");

//
module.exports = function (app) {

  app.get("/api/gamers", function (req, res) {
    return res.json(gamers)
  });

  app.post("/api/gamers", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      gamerDifference: 1000
    };

    var newGamer = req.body;
    //sets the newgamer scores to a variable
    var gamerScores = newGamer.scores;

    var totalDifference = 0;

    //loop through all the friends in the array.
    for (var i = 0; i < gamers.length; i++) {
      var totalDifference = 0;
      //loop through friend scores
      for (var j = 0; j < gamers[i].scores[j]; j++) {
        console.log(gamers[i].scores[j])
        console.log(gamerScores[j])
        //calculate difference between scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(gamerScores[j]) - parseInt(gamers[i].scores[j]));

        //if the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.gamerDifference) {

          //reset the bestMatch to be the new bestMatch.
          bestMatch.name = gamers[i].name;
          bestMatch.photo = gamers[i].photo;
          bestMatch.gamerDifference = totalDifference;
        }
      }
    }

    //saves newGamer to array
    gamers.push(newGamer);

    //return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

  });

}
var app = angular.module('pingPong');

app.controller('SCtrl', function($scope, $rootScope, $firebase, authService, $state){
  console.log("Stats")


  //GET DATA FROM FIREBASE TO BROWSER

  var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");

    ref.on('value', function(dataSnapshot) {

      $rootScope.dataObj = dataSnapshot.val()

      var gScoreTotal = $rootScope.dataObj




      //console.log(gScoreTotal)

      //console.log(gScoreTotal)
      var scoreObj = "";
      var scoreTotal = "";
      var scorez = "";
      var SCORE = "";
      var p1score = "";
      var p2score = "";
      var p1name = "";
      var p2name = "";

    //   _.forIn(gScoreTotal, function(value, key) {
    // console.log(value);
    // value = scoreObj;

    //PLayer
      $.each(gScoreTotal, function(key, value) {
          scoreObj = value;
          //console.log(scoreObj)

          var scoreArr = _.values(scoreObj)
          // console.log(scoreArr[0])
          // console.log(scoreArr[1])
          // console.log(scoreArr[2])
          // console.log(scoreArr[3])

          p1name = scoreArr[0];
          p1score = scoreArr[1];
          p2score = scoreArr[2];
          p2name = scoreArr[3];

          //console.log(p1name, p1score, p2score, p2name)

/////Calculate Wins///////
  var p1wins = 0;
  var p1loss = 0;
  var p2wins = 0;
  var p2loss = 0;
  var p1name = p1name;
  var p2name = p2name;

  if (p1score > p2score) {
      p1wins++
      p2loss++
  } else if (p2score > p1score) {
    p2wins++
    p1loss++

  } else {
    console.log('no Win or Loss')
  };

  // console.log(p1wins)
  // console.log(p2loss)
  // console.log(p2wins)
  // console.log(p1loss)





/////Algorithim for Elo///////

// (function() {
//   var EloRating, elo, girlA, girlB, ratingA, ratingB, results;



//   EloRating = (function() {

//     function EloRating(ratingA, ratingB, scoreA, scoreB) {
//       var expectedScores, newRatings;
//       this.KFACTOR = 16;
//       this._ratingA = ratingA;
//       this._ratingB = ratingB;
//       this._scoreA = scoreA;
//       this._scoreB = scoreB;
//       expectedScores = this._getExpectedScores(this._ratingA, this._ratingB);
//       this._expectedA = expectedScores.a;
//       this._expectedB = expectedScores.b;
//       newRatings = this._getNewRatings(this._ratingA, this._ratingB, this._expectedA, this._expectedB, this._scoreA, this._scoreB);
//       this._newRatingA = newRatings.a;
//       this._newRatingB = newRatings.b;
//     }

//     EloRating.prototype.setNewSetings = function(ratingA, ratingB, scoreA, scoreB) {
//       var expectedScores, newRatings;
//       this._ratingA = ratingA;
//       this._ratingB = ratingB;
//       this._scoreA = scoreA;
//       this._scoreB = scoreB;
//       expectedScores = this._getExpectedScores(this._ratingA, this._ratingB);
//       this._expectedA = expectedScores.a;
//       this._expectedB = expectedScores.b;
//       newRatings = this._getNewRatings(this._ratingA, this._ratingB, this._expectedA, this._expectedB, this._scoreA, this._scoreB);
//       this._newRatingA = newRatings.a;
//       return this._newRatingB = newRatings.b;
//     };

//     EloRating.prototype.getNewRatings = function() {
//       var ratings;
//       return ratings = {
//         a: Math.round(this._newRatingA),
//         b: Math.round(this._newRatingB)
//       };
//     };

//     EloRating.prototype._getExpectedScores = function(ratingA, ratingB) {
//       var expected, expectedScoreA, expectedScoreB;
//       expectedScoreA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
//       expectedScoreB = 1 / (1 + Math.pow(10, (ratingA - ratingB) / 400));
//       return expected = {
//         a: expectedScoreA,
//         b: expectedScoreB
//       };
//     };

//     EloRating.prototype._getNewRatings = function(ratingA, ratingB, expectedA, expectedB, scoreA, scoreB) {
//       var newRatingA, newRatingB, ratings;
//       newRatingA = ratingA + (this.KFACTOR * (scoreA - expectedA));
//       newRatingB = ratingB + (this.KFACTOR * (scoreB - expectedB));
//       return ratings = {
//         a: newRatingA,
//         b: newRatingB
//       };
//     };

//     return EloRating;

//   })();

//   elo = new EloRating();

//   console.log('Start');

//   console.log('---');

//   ratingA = 1400;

//   ratingB = 1400;

//   console.log('Everybody starts with 1400 rating');

//   console.log('A: ' + ratingA + ' - ' + 'B: ' + ratingB);

//   console.log('---');

//   girlA = p1wins;

//   girlB = p2wins;

//   console.log('Data inputed: A: ' + girlA + ' - B: ' + girlB);

//   console.log('---');

//   console.log('New Ratings:');

//   console.log('---');

//   elo.setNewSetings(ratingA, ratingB, girlA, girlB);

//   results = elo.getNewRatings();

//   console.log('A: ' + results.a + ' - ' + 'B: ' + results.b);

//   console.log('---');

//   console.log('Now keep changing :)');

// }).call(this);

//////////////////////////////

console.log(p1wins)

});




////////////FIREBASE LEADERBOARD////////////

var LEADERBOARD_SIZE = 12;

  // Create our Firebase reference
  var scoreListRef = new Firebase('https://ping-pong-score.firebaseio.com/ELOscoreList');

  // Keep a mapping of firebase locations to HTML elements, so we can move / remove elements as necessary.
  var htmlForPath = {};

  // Helper function that takes a new score snapshot and adds an appropriate row to our leaderboard table.
  function handleScoreAdded(scoreSnapshot, prevScoreName) {
    var newScoreRow = $("<tr/>");
    newScoreRow.append($("<td/>").append($("<em/>").text(scoreSnapshot.val().name)));
    newScoreRow.append($("<td/>").text(scoreSnapshot.val().score));
    newScoreRow.append($("<td/>").text(scoreSnapshot.val().wins));
    newScoreRow.append($("<td/>").text(scoreSnapshot.val().losses));


    // Store a reference to the table row so we can get it again later.
    htmlForPath[scoreSnapshot.key()] = newScoreRow;

    // Insert the new score in the appropriate place in the table.
    if (prevScoreName === null) {
      $("#leaderboardTable").append(newScoreRow);
    }
    else {
      var lowerScoreRow = htmlForPath[prevScoreName];
      lowerScoreRow.before(newScoreRow);
    }
  }

  // Helper function to handle a score object being removed; just removes the corresponding table row.
  function handleScoreRemoved(scoreSnapshot) {
    var removedScoreRow = htmlForPath[scoreSnapshot.key()];
    removedScoreRow.remove();
    delete htmlForPath[scoreSnapshot.key()];
  }

  // Create a view to only receive callbacks for the last LEADERBOARD_SIZE scores
  var scoreListView = scoreListRef.limitToLast(LEADERBOARD_SIZE);

  // Add a callback to handle when a new score is added.
  scoreListView.on('child_added', function (newScoreSnapshot, prevScoreName) {
    handleScoreAdded(newScoreSnapshot, prevScoreName);
  });

  // Add a callback to handle when a score is removed
  scoreListView.on('child_removed', function (oldScoreSnapshot) {
    handleScoreRemoved(oldScoreSnapshot);
  });

  // Add a callback to handle when a score changes or moves positions.
  var changedCallback = function (scoreSnapshot, prevScoreName) {
    handleScoreRemoved(scoreSnapshot);
    handleScoreAdded(scoreSnapshot, prevScoreName);
  };
  scoreListView.on('child_moved', changedCallback);
  scoreListView.on('child_changed', changedCallback);


  /// Win snapshot////////////////////////

//   // Helper function that takes a new win snapshot and adds an appropriate row to our leaderboard table.
//   function handleWinAdded(winSnapshot, prevWinName) {
//     var newWinRow = $("<tr/>");
//     newWinRow.append($("<td/>").append($("<em/>").text(winSnapshot.val().name)));
//     newWinRow.append($("<td/>").append($("<em/>").text(winSnapshot.val().name)));
//     newWinRow.append($("<td/>").text(winSnapshot.val().win));

//     // Store a reference to the table row so we can get it again later.
//     htmlForPath[winSnapshot.key()] = newWinRow;

//     // Insert the new win in the appropriate place in the table.
//     if (prevWinName === null) {
//       $("#leaderboardTable").append(newWinRow);
//     }
//     else {
//       var lowerWinRow = htmlForPath[prevWinName];
//       lowerWinRow.before(newWinRow);
//     }
//   }

//   // Helper function to handle a score object being removed; just removes the corresponding table row.
//   function handleWinRemoved(winSnapshot) {
//     var removedWinRow = htmlForPath[winSnapshot.key()];
//     removedWinRow.remove();
//     delete htmlForPath[winSnapshot.key()];
//   }

//   // Create a view to only receive callbacks for the last LEADERBOARD_SIZE scores
//   var winListView = scoreListRef.limitToLast(LEADERBOARD_SIZE);

//   // Add a callback to handle when a new score is added.
//   winListView.on('child_added', function (newWinSnapshot, prevWinName) {
//     handlewinAdded(newwinSnapshot, prevWinName);
//   });

//   // Add a callback to handle when a score is removed
//   winListView.on('child_removed', function (oldWinSnapshot) {
//     handleWinRemoved(oldWinSnapshot);
//   });

//   // Add a callback to handle when a score changes or moves positions.
//   var changedCallback = function (winSnapshot, prevWinName) {
//     handleWinRemoved(winSnapshot);
//     handleScoreAdded(scoreSnapshot, prevScoreName);
//   };
//   winListView.on('child_moved', changedCallback);
//   winListView.on('child_changed', changedCallback);

// // Add a callback to handle when a new score is added.
//   winListView.on('child_added', function (newWinSnapshot, prevWinName) {
//     handleWinAdded(newWinSnapshot, prevScoreName);
//   });

//   // Add a callback to handle when a score is removed
//   winListView.on('child_removed', function (oldWinSnapshot) {
//     handleWinRemoved(oldWinSnapshot);
//   });

//   // Add a callback to handle when a score changes or moves positions.
//   var changedCallback = function (winSnapshot, prevWinName) {
//     handleWinRemoved(winSnapshot);
//     handleWinAdded(winSnapshot, prevWinName);
//   };
//   winListView.on('child_moved', changedCallback);
//   winListView.on('child_changed', changedCallback)


  ///////////////////////////////////////

  // When the user presses enter on scoreInput, add the score, and update the highest score.
  $("#scoreInput").keypress(function (e) {
    if (e.keyCode == 13) {
      var newScore = Number($("#scoreInput").val());
      var name = $("#nameInput").val();
      var wins = $("#winsInput").val();
      var loss = $("#lossInput").val();
      $("#scoreInput").val("");

      if (name.length === 0)
        return;

      var userScoreRef = scoreListRef.child(name);

      // Use setWithPriority to put the name / score in Firebase, and set the priority to be the score.
      userScoreRef.setWithPriority({ name:name, score:newScore, wins: wins, losses: loss }, newScore);
      console.log('1')
    }
});

  $("#score2Input").keypress(function (e) {
    if (e.keyCode == 13) {
      var newScore = Number($("#score2Input").val());
      var name = $("#name2Input").val();
      var wins = $("#wins2Input").val();
      var loss = $("#loss2Input").val();
      $("#score2Input").val("");

      if (name.length === 0)
        return;

      var userScoreRef = scoreListRef.child(name);

      // Use setWithPriority to put the name / score in Firebase, and set the priority to be the score.
      userScoreRef.setWithPriority({ name:name, score:newScore, wins: wins, losses: loss }, newScore);
      console.log('2')
    }
  });

////////////////////////////////////////////






    });
})


////////////ELO ON///////////////

// function CalculateElo() {

// var p1wins = p1wins * 1;
// var p2wins = p2wins *1;
// //var draws = document.score.draws.value * 1;

// var p1losses = p1loss * 1;
// var p2losses = p2loss *1;

// var p1score = p1wins;
// var p2score = p2wins;

// var p1total = wins + draws + losses;
// var p2total = wins + draws + losses;


// var p1percentage = (score /  total);
// var p2percentage = (score / total);

// var p1EloDifference = -400 * Math.log(1 / p1percentage - 1) / Math.LN10;
// var p2EloDifference = -400 * Math.log(1 / p2percentage - 1) / Math.LN10;

// var p1Sign = "";
// var p2Sign = "";

// if (p1EloDifference > 0) { p1Sign="+"; }
// if (p2EloDifference > 0) { p2Sign="+"; }



// // document.points.points.value = score;

// // document.points.totalgames.value = total;

// p1PercentWinningValue = Math.round(p1percentage*10000)/100;
// p2PercentWinningValue = Math.round(p2percentage*10000)/100;


// p1EloDifferenceValue = Sign+Math.round(p1EloDifference);
// p2EloDifferenceValue = Sign+Math.round(p2EloDifference);

// console.log(p1PercentWinningValue)
// console.log(p2PercentWinningValue)

// }



// function CalculateEloFromScore()

// {

// var score = document.points.points.value;

// var total = document.points.totalgames.value;

// var percentage = (score /  total);

// var EloDifference = -400 * Math.log(1 / percentage - 1) / Math.LN10;

// var Sign = "";

// if (EloDifference > 0) { Sign="+"; }



// document.percent.winning.value = Math.round(percentage*10000)/100;

// document.Elo.difference.value = Sign+Math.round(EloDifference);

// }

// ELO STATS CALC
  // function CalculateElo()

// {

// var wins = document.score.wins.value * 1;

// var draws = document.score.draws.value * 1;

// var losses = document.score.losses.value * 1;

// var score = wins + draws/2;

// var total = wins + draws + losses;

// var percentage = (score /  total);

// var EloDifference = -400 * Math.log(1 / percentage - 1) / Math.LN10;

// var Sign = "";

// if (EloDifference > 0) { Sign="+"; }



// document.points.points.value = score;

// document.points.totalgames.value = total;

// document.percent.winning.value = Math.round(percentage*10000)/100;

// document.Elo.difference.value = Sign+Math.round(EloDifference);

// }

// //////////////ELO OVER ////////////


















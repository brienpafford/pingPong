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

(function() {
  var EloRating, elo, girlA, girlB, ratingA, ratingB, results;



  EloRating = (function() {

    function EloRating(ratingA, ratingB, scoreA, scoreB) {
      var expectedScores, newRatings;
      this.KFACTOR = 16;
      this._ratingA = ratingA;
      this._ratingB = ratingB;
      this._scoreA = scoreA;
      this._scoreB = scoreB;
      expectedScores = this._getExpectedScores(this._ratingA, this._ratingB);
      this._expectedA = expectedScores.a;
      this._expectedB = expectedScores.b;
      newRatings = this._getNewRatings(this._ratingA, this._ratingB, this._expectedA, this._expectedB, this._scoreA, this._scoreB);
      this._newRatingA = newRatings.a;
      this._newRatingB = newRatings.b;
    }

    EloRating.prototype.setNewSetings = function(ratingA, ratingB, scoreA, scoreB) {
      var expectedScores, newRatings;
      this._ratingA = ratingA;
      this._ratingB = ratingB;
      this._scoreA = scoreA;
      this._scoreB = scoreB;
      expectedScores = this._getExpectedScores(this._ratingA, this._ratingB);
      this._expectedA = expectedScores.a;
      this._expectedB = expectedScores.b;
      newRatings = this._getNewRatings(this._ratingA, this._ratingB, this._expectedA, this._expectedB, this._scoreA, this._scoreB);
      this._newRatingA = newRatings.a;
      return this._newRatingB = newRatings.b;
    };

    EloRating.prototype.getNewRatings = function() {
      var ratings;
      return ratings = {
        a: Math.round(this._newRatingA),
        b: Math.round(this._newRatingB)
      };
    };

    EloRating.prototype._getExpectedScores = function(ratingA, ratingB) {
      var expected, expectedScoreA, expectedScoreB;
      expectedScoreA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
      expectedScoreB = 1 / (1 + Math.pow(10, (ratingA - ratingB) / 400));
      return expected = {
        a: expectedScoreA,
        b: expectedScoreB
      };
    };

    EloRating.prototype._getNewRatings = function(ratingA, ratingB, expectedA, expectedB, scoreA, scoreB) {
      var newRatingA, newRatingB, ratings;
      newRatingA = ratingA + (this.KFACTOR * (scoreA - expectedA));
      newRatingB = ratingB + (this.KFACTOR * (scoreB - expectedB));
      return ratings = {
        a: newRatingA,
        b: newRatingB
      };
    };

    return EloRating;

  })();

  elo = new EloRating();

  console.log('Start');

  console.log('---');

  ratingA = 1400;

  ratingB = 1400;

  console.log('Everybody starts with 1400 rating');

  console.log('A: ' + ratingA + ' - ' + 'B: ' + ratingB);

  console.log('---');

  girlA = p1wins;

  girlB = p2wins;

  console.log('Data inputed: A: ' + girlA + ' - B: ' + girlB);

  console.log('---');

  console.log('New Ratings:');

  console.log('---');

  elo.setNewSetings(ratingA, ratingB, girlA, girlB);

  results = elo.getNewRatings();

  console.log('A: ' + results.a + ' - ' + 'B: ' + results.b);

  console.log('---');

  console.log('Now keep changing :)');

}).call(this);

//////////////////////////////


});








//CALCULATE WINS FOR PLAYER 1



  // var gameCount = 0;

  // games.on('child_added', function (snapshot) {
  //   var gameId = snapshot.val();
  //   gameCount++;
  //   console.log("gameCount=" +gameCount+ "," + gameId)

  // })


// CALCULATE LOSSES FOR PLAYER 1




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



// // function CalculateEloFromScore()

// // {

// // var score = document.points.points.value;

// // var total = document.points.totalgames.value;

// // var percentage = (score /  total);

// // var EloDifference = -400 * Math.log(1 / percentage - 1) / Math.LN10;

// // var Sign = "";

// // if (EloDifference > 0) { Sign="+"; }



// // document.percent.winning.value = Math.round(percentage*10000)/100;

// // document.Elo.difference.value = Sign+Math.round(EloDifference);

// // }

// // ELO STATS CALC
//   // function CalculateElo()

// // {

// // var wins = document.score.wins.value * 1;

// // var draws = document.score.draws.value * 1;

// // var losses = document.score.losses.value * 1;

// // var score = wins + draws/2;

// // var total = wins + draws + losses;

// // var percentage = (score /  total);

// // var EloDifference = -400 * Math.log(1 / percentage - 1) / Math.LN10;

// // var Sign = "";

// // if (EloDifference > 0) { Sign="+"; }



// // document.points.points.value = score;

// // document.points.totalgames.value = total;

// // document.percent.winning.value = Math.round(percentage*10000)/100;

// // document.Elo.difference.value = Sign+Math.round(EloDifference);

// // }

// //////////////ELO OVER ////////////






// APPEND DATA TO TABLES








//////////////////////

      //console.log($scope.winCount)




// //FIREBASE DATA TO ARRAY FOR DATA SORTING


//     //PLAYER NAME, SCORE OBJECTS
//     var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");
//     ref.on('child_added', function(snapshot) {
//       var player1RName = (snapshot.val().player1);
//       var player2RName = (snapshot.val().player2);
//       var player1RScore = (snapshot.val().p1score);
//       var player2RScore = (snapshot.val().p2score);
//       //console.log(player2RScore)

//

//     var myScore = 0;

//     if (player1RScore > player2RScore) {
//       console.log('player 1 wins!')
//       return myScore + 1;
//     } else if (player1RScore < player2RScore) {
//         console.log('player 2 wins!')
//       }

//   console.log(myScore);
//   });






// app.controller("GPCtrl", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     var gamesRef = new Firebase("FBURL").child("games");
//     var query = messagesRef.orderByChild('p1name')
//   }])



    // // Get a database reference to our posts
    // var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");
    // // Attach an asynchronous callback to read the data at our posts reference
    // ref.on("value", function(games) {
    //   console.log(games.val());
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });




//       });

//     console.log($rootScope.dataObj)



          // var scoreArr = [];
          // for (var prop in scoreObj) {
          //     scoreArr.push(scoreObj[prop]);
          //     console.log(scoreArr[0])
          //     //console.log(scoreArr[1])
          //     //console.log(scoreArr[2])
          //     //console.log(scoreArr[3])
          // }


    // N and S
        // $.each(scoreObj, function(key, value) {
        //   var scorez = value;
        //   console.log(scorez)
    // p3name and p3score
          // $.each(scorez, function(key, value) {
          //   var SCORE = value;
          //   //console.log(SCORE)



          //console.log(scoreArr);

          // })
        // });







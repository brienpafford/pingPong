var app = angular.module('pingPong');

app.controller('SCtrl', function($scope, $rootScope, $firebase, authService, $state){
  console.log("Stats")

//CALCULATE WINS FOR PLAYER 1

  var wins = new Firebase('https://ping-pong-score.firebaseio.com/games');

  var winCount = 0;

  $scope.winCount = winCount;
  wins.on('child_added', function (snapshot) {
    var win = snapshot.val().player1;
    winCount++;
    console.log($scope.winCount)

  })

// CALCULATE LOSSES FOR PLAYER 1



// ELO STATS CALC
  function CalculateElo()

{

var wins = document.score.wins.value * 1;

var draws = document.score.draws.value * 1;

var losses = document.score.losses.value * 1;

var score = wins + draws/2;

var total = wins + draws + losses;

var percentage = (score /  total);

var EloDifference = -400 * Math.log(1 / percentage - 1) / Math.LN10;

var Sign = "";

if (EloDifference > 0) { Sign="+"; }



document.points.points.value = score;

document.points.totalgames.value = total;

document.percent.winning.value = Math.round(percentage*10000)/100;

document.Elo.difference.value = Sign+Math.round(EloDifference);

}

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


// //GET DATA FROM FIREBASE TO BROWSER

//   var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");

//     ref.on('value', function(dataSnapshot) {

//       $rootScope.dataObj = dataSnapshot.val()

//       var gScoreTotal = $rootScope.dataObj



//       });

//     console.log($rootScope.dataObj)







});

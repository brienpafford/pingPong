var app = angular.module('pingPong');

app.controller('GPCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $firebase, authService){
  console.log("Game Page");

//SAVE GAME SCORES TO FIREBASE

      $scope.saveGame = function () {
        //console.log('submitted!')


      var ref = new Firebase("https://ping-pong-score.firebaseio.com/")
      var authData = ref.getAuth();
      var usersRef = ref.child("games");

      //console.log(authData.uid)


      //console.log(authData.uid)

      var p1name = authData.uid;
      var p2name = "simplelogin:89";
      var randomGameId = Math.round(Math.random() * 10000);
      //console.log(p2name);

      usersRef.push({

          gameId: randomGameId,
          player1: p1name,
          player2: p2name,
          p1score: "10",
          p2score: "21",
      });

}

// GET DATA FROM FIREBASE TO BROWSER

  var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");

    ref.once('value', function(dataSnapshot) {

      $rootScope.dataObj = dataSnapshot.val()

      var gScoreTotal = $rootScope.dataObj

      // console.log(gScoreTotal)
      // $.each(

      });

//FIREBASE DATA TO ARRAY FOR DATA SORTING


    //PLAYER NAME, SCORE OBJECTS
    var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");
    ref.on('child_added', function(snapshot) {
      var player1RName = (snapshot.val().player1);
      var player2RName = (snapshot.val().player2);
      var player1RScore = (snapshot.val().p1score);
      var player2RScore = (snapshot.val().p2score);
      //console.log(player2RScore)

//CALCULATE WINS FOR USER

    var userScore = 0;

    if (player1RScore > player2RScore) {
      console.log('player 1 wins!')
    } else if (player1RScore < player2RScore) {
        console.log('player 2 wins!')
      }

  console.log(userScore);
  });
}])





// app.controller("GPCtrl", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     var gamesRef = new Firebase("FBURL").child("games");
//     var query = messagesRef.orderByChild('p1name')
//   }])










      // $http.get("https://ping-pong-score.firebaseio.com/")
      //   .success(function(result) {

      //     console.log(ref.child("games.-JtMEB8bBhynAJi-Hqg9"))

      //     $scope.scores = result;

      //   })
      //   .error(function (data, status) {
      //     console.log('got data?');
      //   })


    // // Get a database reference to our posts
    // var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");
    // // Attach an asynchronous callback to read the data at our posts reference
    // ref.on("value", function(games) {
    //   console.log(games.val());
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });





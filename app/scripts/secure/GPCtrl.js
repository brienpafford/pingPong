var app = angular.module('pingPong');

app.controller('GPCtrl', function($scope, $rootScope, $firebase, authService, $state){
  console.log("Game Page");

//SAVE GAME SCORES TO FIREBASE

  var ref = new Firebase("https://ping-pong-score.firebaseio.com/")
  var authData = ref.getAuth();

// SET SCOPE TO USER INPUT

    $scope.p1 = {};
    $scope.p2 = {};
    $scope.saveGame = function () {

// CREATE PLAYERS/SCORES OBJECT

    var playerObj = {
    p1name: $scope.p1.name,
    p2name: $scope.p2.name,
    p1score: $scope.p1.score,
    p2score: $scope.p2.score
 }

//
    var usersRef = ref.child("games");
    var randomGameId = Math.round(Math.random() * 10000);

// SAVE DATA TO FIREBASE

    usersRef.push({

        gameId: randomGameId,
        player1: $scope.p1.name,
        player2: $scope.p2.name,
        p1score: $scope.p1.score,
        p2score: $scope.p2.score,
    });

// REFRESH PAGE UPON submit

      $state.reload()
  }
});

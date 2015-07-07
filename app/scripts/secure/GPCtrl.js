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

    var gameObj = {
    p1name: $scope.p1.name,
    p2name: $scope.p2.name,
    p1score: $scope.p1.score,
    p2score: $scope.p2.score


      // p1name: "Brien",
      // p1score: "21",
      // p2name: "Noah",
      // p2Score: "18"
 }


    var ref = new Firebase("https://ping-pong-score.firebaseio.com/games")
    var gameUidRef = ref.push(gameObj);
    // var gameUid = gameUidRef.val();
    // //console.log(gameUidRef)


// REFRESH STATE UPON SUBMIT

      $state.reload()
  }
});

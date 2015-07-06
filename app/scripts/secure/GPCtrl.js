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
    // p1name: $scope.p1.name,
    // p2name: $scope.p2.name,
    // p1score: $scope.p1.score,
    // p2score: $scope.p2.score


      p1name: "Brien",
      p1score: "21",
      p2name: "Noah",
      p2Score: "18"

//Start of Game Object
    // player1: {
    //   n: {
    //     p3name: "Brien",
    //   },
    //   s: {
    //      p3score: "21",
    //   },
    // },
    // player2: {
    //   n: {
    //     p3name: "Noah",
    //   },
    //   s: {
    //      p3score: "18",
    //   },
    // }

//End of Game Object
 }


//
    var ref = new Firebase("https://ping-pong-score.firebaseio.com/games")
    var gameUidRef = ref.push(gameObj);
    // var gameUid = gameUidRef.val();
    // //console.log(gameUidRef)






// SAVE DATA TO FIREBASE

    // gamesRef.push({

    //   var

    //     //gameId: randomGameId,
    //     player1: $scope.p1.name,
    //     player2: $scope.p2.name,
    //     p1score: $scope.p1.score,
    //     p2score: $scope.p2.score,
    // });

// REFRESH PAGE UPON submit

      $state.reload()
  }


     // console.log(scorez)
      // $.each(gScoreTotal, function(index) {
      //   $.each(gScoreTotal[index], function(key, value) {
      //     scorez = value;
      //   })
      // })

      // console.log(scoreObj)


});

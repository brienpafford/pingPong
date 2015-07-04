var app = angular.module('pingPong');

app.controller('GPCtrl', ['$scope', '$http', function($scope, $http, $firebase, authService){
  console.log("Game Page");


      $scope.saveGame = function () {
        console.log('submitted!')


      var ref = new Firebase("https://ping-pong-score.firebaseio.com/")
      var authData = ref.getAuth();
      var usersRef = ref.child("games");

      //console.log(authData.uid)

      var p1name = authData.uid;
      var p2name = "simplelogin:89";

      //console.log(p2name);

      usersRef.push({

          player1: p1name,
          player2: p2name,
          p1score: "21",
          p2score: "18",
      });






      // $http.get("https://ping-pong-score.firebaseio.com/")
      //   .success(function(result) {

      //     console.log(ref.child("games.-JtMEB8bBhynAJi-Hqg9"))

      //     $scope.scores = result;

      //   })
      //   .error(function (data, status) {
      //     console.log('got data?');
      //   })
}


    // Get a database reference to our posts
    var ref = new Firebase("https://ping-pong-score.firebaseio.com/games");
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });


}]);


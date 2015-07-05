var app = angular.module('pingPong');

app.factory("Profile", ["$firebaseObject", function($firebaseObject) {
  return function(username) {
    var ref = new Firebase("FBURL" + "/games")
    var profileRef = ref.child(username)
    console.log(username)
  }
  }])

app.controller('ProfileCtrl', ['$scope', '$rootScope', function($scope, $rootScope, $firebase, authService) {
  console.log("Game Page");

  $scope.saveBio = function () {
        console.log('save prof info!')
      }
    }]);

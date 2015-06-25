var app = angular.module('pingPong');

app.controller('RegisterCtrl', function($scope, $state, authService){
  $scope.user = {};
  $scope.register = function(){
    var userObj = {
      email: $scope.user.email,
      password: $scope.user.pw
    };

    $scope.user.email = '';
    $scope.user.pw = '';

    authService.createUser(userObj, function(result){
      if(result){
        $state.go('secure.profile');
      }
    });
  };
});

var app = angular.module('pingPong');

app.controller('LoginCtrl', function($scope, $state, authService){
  $scope.user = {};
  $scope.login = function(){
    var userObj = {
      name: $scope.user.name,
      email: $scope.user.email,
      password: $scope.user.pw
    };

    $scope.user.name= '';
    $scope.user.email = '';
    $scope.user.pw = '';

    authService.loginWithPW(userObj, function(){
      $state.go('gamepage');
    });
  };
});

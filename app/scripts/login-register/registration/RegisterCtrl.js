var app = angular.module('pingPong');

app.controller('RegisterCtrl', function($scope, $state, authService){
  $scope.user = {};
  $scope.register = function(){
    var userObj = {
      name: $scope.user.name,
      email: $scope.user.email,
      password: $scope.user.pw
    };

    $scope.user.name= '';
    $scope.user.email = '';
    $scope.user.pw = '';

    authService.createUser(userObj, function(result){
      if(result){
        $state.go('gamepage');
      }
    });
  };
});

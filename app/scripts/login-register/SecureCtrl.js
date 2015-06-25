var app = angular.module('pingPong');

app.controller('SecureCtrl', function($scope, $state, isLoggedIn){
  !isLoggedIn && $state.go('login');
});

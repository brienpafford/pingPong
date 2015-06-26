var app = angular.module('pingPong', ['ui.router', 'firebase']);

app.constant('FBURL', 'https://ping-pong-score.firebaseio.com');

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'scripts/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('login',{
      url: '/login',
      templateUrl: 'scripts/login-register/login-logout/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'scripts/login-register/login-logout/logout.html',
      controller: 'LoginCtrl',
      resolve: {
        logout: function(authService){
          authService.logout();
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'scripts/login-register/registration/register.html',
      controller: 'RegisterCtrl'
    })
    .state('secure', {
      abstract: true,
      template: '<div ui-view>',
      controller: 'SecureCtrl',
      resolve: {
        isLoggedIn: function(authService){
          return authService.isLoggedIn();
        }
      }
    })
    .state('gamepage', {
      url: '/gamepage',
      templateUrl: 'scripts/secure/gamepage.html',
      controller: 'GPCtrl'
    })

    .state('trophyroom', {
      url: '/trophyroom',
      templateUrl: 'scripts/secure/trophyroom.html',
      controller: 'TRCtrl'
    })

    .state('secure.profile', {
      url: '/profile',
      templateUrl: 'scripts/secure/profile.html',
      controller: 'ProfileCtrl'
    });
});

////////////// DATA POSTING ///////////


function saveAuthData (authData) {
  $.ajax({
    method: 'POST',
    url: `${FBURL}/users/${authData.uid}/profile.json?auth=${authData.token}`,
    data: JSON.stringify(authData)
  });
}


function MyCtrl($scope) {
    angular.element(document).ready(function () {

$(document).ready(function(){
      $('.parallax').parallax();
    });



        console.log('Hello World');
    });
}


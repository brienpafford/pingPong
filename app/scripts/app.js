$(document).ready(function() {
    $('select').material_select();
});

var app = angular.module('pingPong', ['ui.router', 'firebase', 'ngMaterialize']);

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
      url: '/',
      templateUrl: 'scripts/home/home.html',
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

    .state('#newGameModal', {
      url: '/newGame',
      templateUrl: 'scripts/secure/newGameModal.html',
      controller: 'GPCtrl'
    })

    .state('stats', {
      url: '/stats',
      templateUrl: 'scripts/secure/stats.html',
      controller: 'SCtrl'
    })

    .state('secure.profile', {
      url: '/profile',
      templateUrl: 'scripts/secure/profile.html',
      controller: 'ProfileCtrl'
    });
});

////////////// Document Ready JS ///////////








//         console.log('Hello World');
//     });
// }


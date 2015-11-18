angular
  .module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
        })
        .when('/home', {
            templateUrl: 'views/home.html',
        })
        .when('/settings', {
            templateUrl: 'views/settings.html',
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
        })
        .otherwise({
            redirectTo: '/'
        });
  });

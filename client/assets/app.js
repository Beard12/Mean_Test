var app = angular.module('Test', ['ngRoute', 'ngCookies'])
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'indexController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/home.html',
			controller: 'homeController'
		})
		.when('/poll/:id', {
			templateUrl: 'partials/poll.html',
			controller: 'pollController'
		})
		.when('/create', {
			templateUrl: 'partials/createpoll.html',
			controller: 'createpollController'
		})
		.otherwise({
			redirectTo: '/'
		})
})	
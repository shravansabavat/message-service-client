angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/messages', {
			templateUrl: 'views/messages.html',
			controller: 'MessagesController'
		})

	$locationProvider.html5Mode(true);
}]);
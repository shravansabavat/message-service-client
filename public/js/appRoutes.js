angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/checkPallyndrome', {
			templateUrl: 'views/pallyndromeChecker.html',
			controller: 'PallyndromeCheckerController'
		})

	$locationProvider.html5Mode(true);

}]);
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

		.when('/pallyndromeDetails', {
			templateUrl: 'views/pallyndromeDetails.html',
			controller: 'PallyndromeDetailsController'
		})

	$locationProvider.html5Mode(true);
}]);
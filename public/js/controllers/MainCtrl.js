angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.isActive = false;

	$scope.toggleActive = function() {
		$scope.isActive = !$scope.isActive;
	};

});
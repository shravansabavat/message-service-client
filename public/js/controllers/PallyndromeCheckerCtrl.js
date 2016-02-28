angular.module('PallyndromeCheckerCtrl', []).controller('PallyndromeCheckerController', function(PallyndromeChecker, $scope, $parse) {

	PallyndromeChecker.getPallyndromes().then(function(pallyndromes) {
		$scope.pallyndromes = pallyndromes;
	});

	$scope.checkPallyndrome = function() {
		PallyndromeChecker.checkPallyndrome($scope.pallyndromeStr)
			.then(function(response) {
				if (typeof response.data !== 'undefined' && typeof response.data.pallyndrome !=='undefined') {
					var serverMessage = $parse('pallyndromeCheckForm.pallyndromeStr.$error.pallyndromeResult');

					if (response.data.pallyndrome === true) {
						$scope.pallyndromeCheckForm.$setValidity('pallyndromeStr', true, $scope.pallyndromeCheckForm);
						serverMessage.assign($scope, 'Valid pallyndrome');
					}
					else {
						$scope.pallyndromeCheckForm.$setValidity('pallyndromeStr', false, $scope.pallyndromeCheckForm);
						serverMessage.assign($scope, 'Not a pallyndrome');
					}

					return PallyndromeChecker.getPallyndromes();
				}
			})
			.then(function (pallyndromes) {
				$scope.pallyndromes = pallyndromes;
			})
			.catch(function (err) {
				console.log(err);
			})
	};

});
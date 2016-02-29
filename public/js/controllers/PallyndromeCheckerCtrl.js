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
						$scope.pallyndromeValidityClass = 'pallyndromeValidityClassGreen';
					}
					else {
						$scope.pallyndromeCheckForm.$setValidity('pallyndromeStr', false, $scope.pallyndromeCheckForm);
						serverMessage.assign($scope, 'Not a pallyndrome');
						$scope.pallyndromeValidityClass = 'pallyndromeValidityClassRed';
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
	}

	$scope.getPallyndromeDetails = function (pallyndromeStr) {
		PallyndromeChecker.getPallyndromeDetails(pallyndromeStr).then(function(details) {
			console.log(details);
			$scope.pallyndromeDetails = details;
			$scope.hasPallyndromeDetails = details && typeof details !== 'undefined';
		});
	}

	$scope.deletePallyndrome = function (pallyndromeStr) {
		PallyndromeChecker.deletePallyndrome(pallyndromeStr).then(function(deleted) {
			$scope.hasPallyndromeDetails = false;
			console.log(deleted);

			if (deleted) {
				$scope.hasDeleted = true;
				$scope.deletedMessage = ' Successfully deleted message '  + pallyndromeStr;
			} else {
				$scope.deletedMessage = 'There was a problem in deleting the message ' + pallyndromeStr;
			}

			return PallyndromeChecker.getPallyndromes();
		})
		.then(function (pallyndromes) {
			console.log(pallyndromes);
			$scope.pallyndromes = pallyndromes;
		})
		.catch(function (err) {
			console.log(err);
		})
	}

});
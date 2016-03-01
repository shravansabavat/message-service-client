angular.module('MessagesCtrl', []).controller('MessagesController', function(MessagesService, $scope, $parse) {

	MessagesService.getMessages().then(function(messages) {
		$scope.messages = messages;
	});

	$scope.saveMessage = function() {
		MessagesService.saveMessage($scope.messageInput)
			.then(function(response) {
				if (typeof response.data !== 'undefined' && typeof response.data.messageSaved !=='undefined') {
					var serverMessage = $parse('pallyndromeCheckForm.messageInput.$error.pallyndromeResult');

					if (response.data.messageSaved === true) {
						$scope.pallyndromeCheckForm.$setValidity('messageInput', true, $scope.pallyndromeCheckForm);
						serverMessage.assign($scope, '...message has been saved');
						$scope.pallyndromeValidityClass = 'pallyndromeValidityClassGreen';
					}
					else {
						$scope.pallyndromeCheckForm.$setValidity('messageInput', false, $scope.pallyndromeCheckForm);
						serverMessage.assign($scope, '...there was a problem in saving the message');
						$scope.pallyndromeValidityClass = 'pallyndromeValidityClassRed';
					}


					return MessagesService.getMessages();
				}
			})
			.then(function (messages) {
				$scope.messages = messages;
			})
			.catch(function (err) {
				console.log(err);
			})
	}

	$scope.getMessageDetails = function (messageInput) {
		MessagesService.getMessageDetails(messageInput).then(function(details) {
			console.log(details);
			$scope.pallyndromeDetails = details;
			$scope.hasPallyndromeDetails = details && typeof details !== 'undefined';
		});
	}

	$scope.deleteMessage = function (messageInput) {
		MessagesService.deleteMessage(messageInput).then(function(deleted) {
			$scope.hasPallyndromeDetails = false;
			console.log(deleted);

			if (deleted) {
				$scope.hasDeleted = true;
				$scope.deletedMessage = ' Successfully deleted message '  + messageInput;
			} else {
				$scope.deletedMessage = 'There was a problem in deleting the message ' + messageInput;
			}

			return MessagesService.getMessages();
		})
		.then(function (messages) {
			console.log(messages);
			$scope.messages = messages;
		})
		.catch(function (err) {
			console.log(err);
		})
	}

});
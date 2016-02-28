angular.module('PallyndromeDetailsCtrl', []).controller('PallyndromeDetailsController', function(PallyndromeDetails, $scope) {

    PallyndromeDetails.getPallyndromeDetails().then(function(pallyndromes) {
        console.log(pallyndromes);
    });

});
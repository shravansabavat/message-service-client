angular.module('PallyndromeDetailsService', []).factory('PallyndromeDetails', ['$http', function($http) {
    var PallyndromeDetails = {
        getPallyndromeDetails: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            //return $http.get('http://52.32.44.47:8081/pallyndrome/list').then(function (response) {
            return $http.get('http://localhost:8081/pallyndrome/list').then(function (response) {
                console.log(response);
                return response.data;
            });
        }
    };
    return PallyndromeDetails;
}]);
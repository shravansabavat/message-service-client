angular.module('PallyndromeCheckerService', []).factory('PallyndromeChecker', ['$http', function($http) {
    var PallyndromeChecker = {
        getPallyndromes: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('http://localhost:8081/pallyndrome/list').then(function (response) {
                console.log(response);
                return response.data;
            });
        },

        checkPallyndrome: function (input) {
            // process the form
            // $http returns a promise, which has a then function, which also returns a promise
            return $http({
                    method  : 'POST',
                    url     : 'http://localhost:8081/pallyndrome/',
                    data    : {'input': input} // pass in data as strings
                })
                .success(function(data) {
                    return data;
                })
        }
    };
    return PallyndromeChecker;
}]);
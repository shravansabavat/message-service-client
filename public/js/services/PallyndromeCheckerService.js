angular.module('PallyndromeCheckerService', []).factory('PallyndromeChecker', ['$http', function($http) {
    var PallyndromeChecker = {
        getPallyndromes: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('http://52.32.44.47:8081/pallyndrome/list').then(function (response) {
            //return $http.get('http://localhost:8081/pallyndrome/list').then(function (response) {
                console.log(response);
                return response.data;
            });
        },

        checkPallyndrome: function (input) {
            // process the form
            // $http returns a promise, which has a then function, which also returns a promise
            if (typeof input !== 'undefined' && input !== null && input.length > 0) {
                return $http({
                    method  : 'POST',
                    url     : 'http://52.32.44.47:8081/pallyndrome/',
                    //url     : 'http://localhost:8081/pallyndrome/',
                    data    : {'input': input} // pass in data as strings
                })
                    .success(function(data) {
                        return data;
                    })
            }
        },

        getPallyndromeDetails: function (pallyndromeStr) {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('http://52.32.44.47:8081/pallyndrome/'+pallyndromeStr).then(function (response) {
            //return $http.get('http://localhost:8081/pallyndrome/'+pallyndromeStr).then(function (response) {
                console.log(response);
                return response.data;
            });
        },

        deletePallyndrome: function (pallyndromeStr) {
            // $http returns a promise, which has a then function, which also returns a promise
            /return $http.delete('http://52.32.44.47:8081/pallyndrome/'+pallyndromeStr).then(function (response) {//return $http.delete('http://localhost:8081/pallyndrome/'+pallyndromeStr).then(function (response) {
                console.log(response);
                return response.data;
            });
        }
    };
    return PallyndromeChecker;
}]);
angular.module('MessagesService', []).factory('MessagesService', ['$http', function($http) {
    var MessagesService = {
        getMessages: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('http://52.32.44.47:8081/message/list').then(function (response) {
            //return $http.get('http://localhost:8081/message/list').then(function (response) {
                console.log(response);
                return response.data;
            });
        },

        saveMessage: function (input) {
            // process the form
            // $http returns a promise, which has a then function, which also returns a promise
            if (typeof input !== 'undefined' && input !== null && input.length > 0) {
                return $http({
                    method  : 'POST',
                    url     : 'http://52.32.44.47:8081/message/',
                    //url     : 'http://localhost:8081/message/',
                    data    : {'input': input} // pass in data as strings
                })
                    .success(function(data) {
                        return data;
                    })
            }
        },

        getMessageDetails: function (message) {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('http://52.32.44.47:8081/message/'+message).then(function (response) {
            //return $http.get('http://localhost:8081/message/'+message).then(function (response) {
                console.log(response);
                return response.data;
            });
        },

        deleteMessage: function (message) {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.delete('http://52.32.44.47:8081/message/'+message).then(function (response) {//return $http.delete('http://localhost:8081/pallyndrome/'+pallyndromeStr).then(function (response) {
            //return $http.delete('http://localhost:8081/message/'+message).then(function (response) {//return $http.delete('http://localhost:8081/pallyndrome/'+pallyndromeStr).then(function (response) {
                console.log(response);
                return response.data;
            });
        }
    };
    return MessagesService;
}]);
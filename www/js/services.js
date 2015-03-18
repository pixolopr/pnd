var adminurl = "http://pnd.herobo.com/api/";
var myservices = angular.module('myservices', [])

.factory('MyServices', function ($http, $location) {
    var cart = [];

    return {
        getproducts: function()
        {
            return $http.get(adminurl + "items/alcohol");
        },
        login: function(login)
        {
            return $http.get(adminurl + "user/login", {
            params: {
                username: login.username,
                password: login.password
            }
            });
        },

    }
});
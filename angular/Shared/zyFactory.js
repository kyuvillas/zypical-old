/* Factory */
var zyFactory = angular.module('zyFactory', []); 
zyFactory.factory('DataFactory', ['$http', function ($http, config) {
    "use strict";
    return {
        //Samples
        SampleGET: function () {
            return $http({
                url: "url/sampleget",
                method: 'GET'
            });
        },
        GetSavedProducts: function(){
            return $http({
                url: "json/products.json",
                method: 'GET'
            });
        },
        GetSavedStores: function(){
            return $http({
                url: "json/stores.json",
                method: 'GET'
            });
        },
        GetStores: function(){
            return $http({
                url: "json/stores.json",
                method: 'GET'
            });
        },
        GetManagedStores: function(){
            return $http({
                url: "json/managedstores.json",
                method: 'GET'
            });
        },
        GetBazaarStores: function(){
            return $http({
                url: "json/bazaar.json",
                method: 'GET'
            });
        },
        GetProductImages: function(){
            return $http({
                url: "json/product-imgs.json",
                method: 'GET'
            });
        }
    }
    
}]);

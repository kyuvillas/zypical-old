(function(){
    'use strict';
    angular.module('userprofile')
        .controller('StoreController', StoreController);
    
        function StoreController($rootScope,$state, $scope, $interval, $mdDialog, DataFactory, $mdSidenav) {
        $scope.savedproducts = null;
          getShops();
          getManagedStores();
            function getShops(){
              DataFactory.GetStores().then(function(res){
                  $scope.stores =  res.data;
                  $rootScope.loadingstate = false;
              });
            }
            function getManagedStores(){
              DataFactory.GetManagedStores().then(function(res){
                  $scope.managedstores =  res.data;
                  $rootScope.loadingstate = false;
              });
            }
        }

      
})();
(function(){
    'use strict';
    angular.module('userprofile')
        .controller('SavesController', SavesController);
        
        function SavesController($rootScope, $scope, $state, $interval, $mdDialog,  DataFactory, $mdSidenav) {
            var s = this;
            s.product=  "Short Sleeves Polo";

            s.savedproducts = null;
            s.savedstores =  null;
            getSavedProducts();
            getSavedStores();
            
            function getSavedProducts(){
                DataFactory.GetSavedProducts().then(function(res){
                    s.savedproducts =  res.data;
                    $rootScope.loadingstate = false;
                });
            }
            function getSavedStores(){
                DataFactory.GetSavedStores().then(function(res){
                    s.savedstores =  res.data;
                    $rootScope.loadingstate = false;
                });
            }
            
            
            s.deleteproduct = function(e){
                $(e.target).parent().parent().parent().parent().remove();
            };
        }
})();


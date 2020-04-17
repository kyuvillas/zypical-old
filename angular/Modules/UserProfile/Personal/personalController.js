(function(){
    'use strict';
    angular.module('userprofile')
        .controller('PersonalController', PersonalController);
    
        function PersonalController($rootScope,$state, $scope, $interval, $mdDialog,  DataFactory, $mdSidenav) {
        	$rootScope.loadingstate = false;
            $scope.edit = function(){
                $('.edit').show();
            }
        }

      
})();
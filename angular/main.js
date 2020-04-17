(function(){
    'use strict';
    /* MAIN MODULE */
//    temporarily removed jquery scrollbar jQueryScrollbar
    angular.module('MainApplication', ['zyRouter', 'ngAnimate', 'ngMaterial', 'zyFactory', 'zyDirectives','jQueryScrollbar','home','bazaar','userprofile','search','ui.slider','socialLogin','search','storeprofile','ui.slider'])
        .config(['$mdThemingProvider', 'socialProvider', function($mdThemingProvider, socialProvider){
//            $mdThemingProvider.generateThemesOnDemand(true);
            $mdThemingProvider.theme('default');
            socialProvider.setFbKey({
//                details set with jk current fb site app credentials
                appId: '1097157513649723',
                apiVersion: 'v2.4'
            });
        }])
        .controller('MainController', MainController);
    
        function MainController($scope, $rootScope, $state, $interval, $mdDialog,  DataFactory, $mdSidenav, $window) {
            var m = this;
            m.isLoggedIn = false;
            m.auth = 'loginSuccess';

            // set to true in every change of state - every state needs to turn this off
            $rootScope.loadingstate = true;

            $rootScope.$state = $state;
            m.mainstate = $state;

            m.ChangeState = function (state) {
                $state.go(state);
            }
        }
    
    
    
})();

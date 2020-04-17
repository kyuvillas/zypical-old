(function(){
    'use strict';
    angular.module('userprofile')
        .controller('UserProfileController', UserProfileController);
        
        function UserProfileController($rootScope,$state, $scope, $interval, $mdDialog,  DataFactory, $mdSidenav) {
            var u = this;

            // saved stores - sa right side
            // messages
            // orders placed
            // list of business - sa right side
            // my profile
            // affiliate - wag muna

            var user = {
                name: "Queenie Villasin",
                username: "kyuvillas",
                gender: "female",
                bday: "May 21, 1996",
                emailadd: "q.villasin@gmail.com",
                pic: "assets/images/placeholders/me.jpg",
            }
            u.user = user;
            u.active = 'saves';

            u.ChangeTab = function(tab){
                $state.go('userprofile.' + tab);
                u.active = tab;
                console.log($rootScope.$state.current.name);
                  $rootScope.loadingstate = true;
            }
            u.product=  "Short Sleeves Polo";
            console.log($rootScope.$state.current.name);
            var current = $rootScope.$state.current.name;
            if(current == 'userprofile.stores'){
                u.active = 'stores';
            }else if(current == 'userprofile.saves'){
                u.active = 'saves';
            }else if(current == 'userprofile.messages'){
                u.active = 'messages';
            }else if(current == 'userprofile.personal'){
                u.active = 'personal';
            }
            u.loading = false;

        }
})();
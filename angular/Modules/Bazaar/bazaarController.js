(function(){
    'use strict';
    angular.module('bazaar')
        .controller('BazaarController', BazaarController);
    
        function BazaarController($rootScope, DataFactory){
            var b = this;
            b.bazaarStores = [];
            b.tempProductImages = [];
            $rootScope.loadingstate = false;
            
            b.loadStores = function(){
                DataFactory.GetBazaarStores().then(function(response){
                    b.bazaarStores = response.data;
                });
                
                DataFactory.GetProductImages().then(function(response){
                    b.tempProductImages = response.data;
                });
                b.showBazaarItems();
            }
            
            b.showBazaarItems = function(){
                $(".bazaarArea").addClass("bazaarAreaActive");
            }
            
            setTimeout(function(){
                $(".welcomeMessage").addClass("welcomeMoveUp");
                setTimeout(function(){
                    $(".welcomeMessage").addClass("fade");
                    b.loadStores();
                    setTimeout(function(){
                        $(".welcomeMessage").hide();
                    },1000);
                },200);
            }, 2200);
            
        }
    
})();
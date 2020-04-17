(function(){
    'use strict';
    angular.module('storeprofile')
        .controller('StoreProfileController', StoreProfileController);
                    
        function StoreProfileController($scope,DataFactory,$mdDialog){

        	$scope.savedproducts = null;
            getSavedProducts();

            $scope.shop = {	
							"id":1,
							"storename": "beauyish",
							"storefullname": "Beauyish",	
							"delivery" : ["COD", "Meetup","Ship"],						
							"storepic": "assets/images/placeholders/polo1.jpg",
							"saves": "53",
							"products": "15"
						}

        	function getSavedProducts(){
                DataFactory.GetSavedProducts().then(function(res){
                    $scope.savedproducts =  res.data;
                });
            }
            $scope.showProduct = function(ev,product){
                $mdDialog.show({
                    controller: controller,
                    templateUrl: 'angular/DirectiveTemplates/product-item.html',
                    locals: {
                       product:product
                    },
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false
                });
            }
            function controller($scope, $mdDialog,$state,product){

                $scope.imgs= ["assets/images/placeholders/polo1.jpg", "assets/images/placeholders/baseball tshirt.jpg", "assets/images/placeholders/s-l500.jpg", "assets/images/placeholders/black jacket.jpg", "assets/images/placeholders/polo2.jpg"];
                $scope.product = product;
                $scope.hide = function(){
                    $mdDialog.hide();
                };
                
                $scope.cancel = function(){
                    $mdDialog.cancel();
                };

            }
        }
})();
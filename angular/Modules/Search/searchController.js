(function(){
    'use strict';
    angular.module('search')
        .controller('SearchController', SearchController);
                    
        function SearchController($rootScope,$scope,DataFactory,$mdDialog){
        	var s = this;
        	s.keyword= "organizer";
        	$scope.savedproducts = null;
            getSavedProducts();
            function getSavedProducts(){
              DataFactory.GetSavedProducts().then(function(res){
                  $scope.savedproducts =  res.data;
                  $rootScope.loadingstate = false;
              });
            }

            s.sliderExample9 = [100, 500];
            s.tags = ["Bags","organizer"];
            s.delivery = ["Meetup","Shipment","Cash on Delivery"];
            s.location = ["Makati City", "Caloocan City", "Metro Manila","Cebu City"];

            // showProductDialog();
            function showProductDialog(){
                $mdDialog.show({
                    controller: LoginController,
                    templateUrl: 'angular/DirectiveTemplates/product-item.html',
                    locals: {
                       id:1
                    },
                    parent: angular.element(document.body),
                    // targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false
                });
            }
            function LoginController($scope, $mdDialog,id){
                $scope.imgs= [
"assets/images/placeholders/polo1.jpg", "assets/images/placeholders/baseball tshirt.jpg", "assets/images/placeholders/s-l500.jpg", "assets/images/placeholders/black jacket.jpg", "assets/images/placeholders/polo2.jpg"
]
                $scope.product = {
                    "id":5,
                    "storename": "plainz",
                    "reputation": "green",
                    "delivery" : ["Meetup"],
                    "storepic": "assets/images/placeholders/me.jpg",
                    "productpic": "assets/images/placeholders/polo2.jpg",
                    "productname": "Formal Polo",
                    "productdesc": "An organizer size of a hand.<br>1 Powerbank compartment<br>3 flashdrive pockets<br>3 memory card pockets<br>3 cord garters<br>",
                    "price": "250",
                    "saved": true,
                    "saves": 4,
                    "views": "108"
                }
                $scope.preview = $scope.product.productpic;
                $scope.hide = function(){
                    $mdDialog.hide();
                };
                
                $scope.cancel = function(){
                    $mdDialog.cancel();
                };

                $scope.changepreview = function(pic){
                    $scope.preview = pic;
                };
            }
        }
})();
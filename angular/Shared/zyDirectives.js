/* DIRECTIVES */
var zyDirectives = angular.module('zyDirectives', ['zyFactory']); //
zyDirectives.directive("squareImg", function () {
    return {
        restrict: 'E',
        scope: {
            img: '='
        },
        replace: true,
        link: function (scope, element, attrs) {

                $(element[0]).css("height",  "150px");
                
            if (scope.img !== undefined) {
                $(element[0]).css("background",  "url(" + scope.img.toString() +") 50% 50% no-repeat");
                $(element[0]).css("background-size",  "cover");
                $(element[0]).css("background-repeat",  "no-repeat");
            }
        }
    }

});
zyDirectives.directive("productGrid", function ($mdDialog,$state) {
    return {
        restrict: 'E',
        link: function(scope, iElement, iAttrs){
            // assigning things from iAttrs to scope goes here

            scope.ChangeState = function(state){
                $state.go(state);
            }
            scope.showLogInDialog = function(ev,product){
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

                $scope.preview = $scope.product.productpic;
                $scope.changepreview = function(pic){
                    $scope.preview = pic;
                };
            }
        },
        scope: {
            products: '=',
            column : '=',
            ratiowidth : '=',
            ratioheight : '='
        },
        replace: false,
        templateUrl: 'angular/DirectiveTemplates/productGrid.html'
    }

});
zyDirectives.directive("storeGrid", function ($mdDialog,$state) {
    return {
        restrict: 'E',
        link: function(scope, iElement, iAttrs){
        },
        scope: {
            stores: '='
        },
        replace: false,
        templateUrl: 'angular/DirectiveTemplates/storeGrid.html'
    }

});
(function(){
    'use strict';
    angular.module('home')
        .controller('HomeController', HomeController);
                    
        function HomeController($location, $document, $mdDialog, $window, DataFactory, $rootScope, $state){
            var h = this;
            h.topStores = [];
            h.topProducts = [];
            h.filterOptions = ["All","Store","Product","Worth"];
            h.filter = h.filterOptions[0];

            $rootScope.loadingstate = false;
            
            h.goToArea = function(area){
                console.log(area);
                var chosenElement = angular.element(document.getElementById(area));
                $document.scrollToElementAnimated(chosenElement, 0, 1000);
            }
            
            h.showLogInDialog = function(ev){
                $mdDialog.show({
                    controller: LoginController,
                    templateUrl: '/zypical/angular/Modules/Home/login.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false
                });
            }
            
            h.showSignupDialog = function(ev){
                $mdDialog.show({
                    controller: SignupController,
                    templateUrl: '/zypical/angular/Modules/Home/signup.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false
                });
            }
            
            function SignupController($scope, $mdDialog){
                $scope.hide = function(){
                    $mdDialog.hide();
                };
                
                $scope.cancel = function(){
                    $mdDialog.cancel();
                };
            }
            
            function LoginController($scope, $mdDialog){
                $scope.hide = function(){
                    $mdDialog.hide();
                };
                
                $scope.cancel = function(){
                    $mdDialog.cancel();
                };
            }
            
            h.getSavedProducts = function(){
                DataFactory.GetSavedProducts().then(function(response){
                    h.topStores = response.data;
                    h.topProducts = response.data;
                    console.log(h.topStores);
                });
            }
            
            h.goToBazaar = function(){
                $state.go('bazaar');
            }
            
            h.getSavedProducts();
            
            h.ChangeState = function(state){
                $state.go(state); 
            }
            
//            h.isSpliceJoin = function(s, i, v){
//                var stringLength = s.length;
//                var allSubStrings = [];
//                var allSpliceJoins = [];
//                if(stringLength % i == 0){
//                    console.error("All substrings will have length of " + i + ". No last substring.");
//                }else{
//                    var startCount = 0;
//                    var endCount = i;
//                    while(stringLength > i){
//                        allSubStrings.push(s.substring(startCount, endCount));
//                        startCount += i;
//                        endCount += i;
//                        stringLength -= i;
//                    }
//                    allSubStrings.push(s.substring(startCount, endCount));
//                    console.log(allSubStrings);
//                    var finalPermutations = [];
//                    angular.forEach(allSubStrings, function(item, key){
//                        h.permuteSubs(allSubStrings, finalPermutations, key, key);
//                    });
//                    console.log(final);
//                }
//            }
//            
//            h.permuteSubs = function(allSubStrings, finalPermutations, index, finalCounter){
//                var tempString = "";
//                for(var x = index; x < allSubStrings.length; x++){
//                    tempString += allSubStrings[x];
//                    index++;
//                    h.permuteSubs(allSubStrings, finalPermutations, index, finalCounter);
//                }
//                if(finalCounter == allSubStrings.length-1){
//                    console.log("DONE");
//                    console.log(finalPermutations);
//                }else{
//                    finalPermutations.push(tempString);
//                    finalCounter++;
//                    h.permuteSubs(allSubStrings, finalPermutations, index, finalCounter);
//                }
//            }
//            
//            h.isSpliceJoin("hello", 2,9);

        //    h.openMenu = function($mdMenu, ev) {
        //      // originatorEv = ev;
        //      $mdMenu.open(ev);
        //    };
        //    
        //    h.showDialog = showDialog;
        //    h.items = [1, 2, 3];
        //
        //    h.try= function(){
        //      DataFactory.SignUp().
        //            then(function(resonse) {
        //                alert(resonse.data);
        //            })
        //    }
        //    function showDialog($event,loc) {
        //       var parentEl = angular.element(document.body);
        //       $mdDialog.show({
        //         parent: parentEl,
        //         targetEvent: $event,
        //         templateUrl:'angular/Modules/Home/login-dialog.html',
        //         locals: {
        //           items: h.items,
        //           loc:loc
        //         },
        //         controller: DialogController,
        //         clickOutsideToClose: true,
        //      escapeToClose: true
        //      });
        //      function DialogController(h, $mdDialog, items,loc) {
        //        h.items = items;
        //        h.selectedTab = loc;
        //        console.log(loc);
        //        h.closeDialog = function() {
        //          $mdDialog.hide();
        //        }
        //
        //        h.submit = function() {
        //          // you can check is form valid with help of $valid parameter
        //          if(h.formName.$valid){
        //              // alert("Name is " + h.username);
        //              var res = $rootScope.SignIn(h.username,h.password);
        //                
        //                
        //                if(res == 'Unauthorized'){
        //                  alert('Unauthorized credentials');
        //                }else if(res.role == 'seller'){
        //                  console.log(res);
        //                  $state.go('storeprofile');
        //                }
        //
        //            
        //          }
        //        }
        //
        //        h.signup = function() {
        //          // you can check is form valid with help of $valid parameter
        //          if(h.signupForm.$valid){
        //                var user = {
        //                  "fname": h.signup_fname,
        //                  "lname": h.signup_lname,
        //                  "gender": h.signup_gender,
        //                  "username": h.signup_username,
        //                  "password": h.signup_pass,
        //                  "emailadd": h.signup_emailadd
        //                }
        //                DataFactory.SignUp(user)
        //                .then(function (response) {
        //                   console.log(response.data);
        //                   if(response.data){
        //                      // $mdDialog.hide();
        //                      h.login(user);
        //
        //                   }
        //                });             
        //          }else{ 
        //            angular.forEach(h.signupForm.$error.required, function(field) {
        //                field.$setTouched();
        //            });
        //          }
        //        }
        //
        //
        //        h.credentials = {};
        //        h.loginForm = {};
        //        h.error = false;
        //        
        //        //when the form is submitted
        //        h.login_submit = function() {
        //          h.submitted = true;
        //          if (!h.loginForm.$invalid) {
        //            h.login(h.login);
        //          } else {
        //            angular.forEach(h.loginForm.$error.required, function(field) {
        //                field.$setTouched();
        //            });
        //            h.error = true;
        //            return;
        //          }
        //        };
        //
        //        //Performs the login function, by sending a request to the server with the Auth service
        //        h.login = function(credentials) {
        //          h.error = false;
        //          Auth.login(credentials, function(user) {
        //            //success function
        //            $mdDialog.hide();
        //            $state.go('userprofile');
        //          }, function(err) {
        //            console.log("error");
        //            h.error = true;
        //          });
        //        };
        //        
        //        // if a session exists for current user (page was refreshed)
        //        // log him in again
        //        
        //
        //        h.logout = function(){
        //          Auth.login();
        //        }
        //      }
        //    }
        //    h.login =function(credentials) {
        //      h.error = false;
        //      Auth.login(credentials, function(user) {
        //        //success function
        //        $mdDialog.hide();
        //        $state.go('userprofile');
        //      }, function(err) {
        //        console.log("error");
        //        h.error = true;
        //      });
        //    };


        }
})();
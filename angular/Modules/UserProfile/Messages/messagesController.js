(function(){
    'use strict';
    angular.module('userprofile')
        .controller('MessagesController', MessagesController);
    
        function MessagesController($rootScope,$state, $scope, $interval, $mdDialog, $timeout,  DataFactory, $mdSidenav) {

			$rootScope.loadingstate = false;

			$scope.messages = [
				{
					"userid":2,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},
				{
					"userid":1,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},
				{
					"userid":2,
					"message":"this is an w text",
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},{
					"userid":2,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},
				{
					"userid":1,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},
				{
					"userid":2,
					"message":"this is an w text",
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},{
					"userid":2,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},
				{
					"userid":1,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"message":"this is an sample text",
					"time": "2:20pm"
				},
				{
					"userid":2,
					"message":"this is an w text",
					"storepic": "assets/images/placeholders/polo1.jpg",
					"time": "2:20pm"
				}
			];
			$scope.chats = [
				{
					"id": 1,
					"storename": "la poche",
					"storepic": "assets/images/placeholders/polo1.jpg",
					"lastmessage": "This is a sample last message",
					"time": "2:20PM"
				},
				{
					"id": 2,
					"storename": "la poche",
					"storepic": "assets/images/placeholders/lapoche.png",
					"lastmessage": "This is a sample last message",
					"time": "2:20PM"
				},
				{
					"id": 3,
					"storename": "la poche",
					"storepic": "assets/images/placeholders/lapoche.png",
					"lastmessage": "This is a sample last message",
					"time": "2:20PM"
				}
			]

			$scope.messageloaded = true;
			$scope.loadMessage = function(){
				$scope.messageloaded = false;
				 $timeout(function(){
				 $scope.messageloaded = true;
				 console.log($scope.messageloaded);
				}, 1000);
			}
            $scope.edit = function(){
                $('.edit').show();
            }
            $scope.send = function(text,id){
            	var obj = 
				{
					"userid":id,
					"message":text,
					"storepic": "assets/images/placeholders/polo1.jpg",
					"time": "2:20pm"
				}
            	$scope.messages.push(obj);
            	console.log($scope.messages);
            	$('#messagewindow').animate({ scrollTop: $('#messagewindow')[0].scrollHeight}, 1000);
            	
            }
        }

      
})();
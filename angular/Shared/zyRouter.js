
/* For Authentication and UI-Router */
var zyRouter = angular.module('zyRouter', ["ui.router"]); //
zyRouter.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/storeprofile');
    $urlRouterProvider.when('/userprofile','/userprofile/saves');
    $stateProvider
        .state('home', {
            name: 'home',
            parent: '',
            url: "/",
            templateUrl: "angular/Modules/Home/home.html"
        })
        .state('search', {
            name: 'search',
            parent: '',
            url: "/search",
            templateUrl: "angular/Modules/Search/search.html",
            controller: "SearchController"
        })
        .state('userprofile', {
            name: 'userprofile',
            parent: '',
            url: "/userprofile",
            templateUrl: "angular/Modules/UserProfile/userprofile.html"
        })
        .state('userprofile.saves', {
            name: 'userprofile.saves',
            parent: 'userprofile',
            url: "/saves",
            templateUrl: "angular/Modules/UserProfile/Saves/saves.html"
        })
        .state('userprofile.stores', {
            name: 'userprofile.stores',
            parent: 'userprofile',
            url: "/stores",
            templateUrl: "angular/Modules/UserProfile/Stores/stores.html",
            controller: "StoreController"
        })
        .state('userprofile.messages', {
            name: 'userprofile.messages',
            parent: 'userprofile',
            url: "/messages",
            templateUrl: "angular/Modules/UserProfile/Messages/messages.html",
            controller: "MessagesController"
        })
        .state('userprofile.personal', {
            name: 'userprofile.personal',
            parent: 'userprofile',
            url: "/personal",
            templateUrl: "angular/Modules/UserProfile/Personal/personal.html",
            controller: "PersonalController"
        })
        .state('storeprofile', {
            name: 'storeprofile',
            parent: '',
            url: "/storeprofile",
            templateUrl: "angular/Modules/StoreProfile/storeprofile.html",
            controller: "StoreProfileController"
        })
        .state('bazaar', {
            name: 'bazaar',
            parent: '',
            url: '/bazaar',
            templateUrl: "angular/Modules/Bazaar/bazaar.html"
        })
    

}]);
//    $locationProvider.html5Mode(true); uncomment to remove hashbang (# in url)
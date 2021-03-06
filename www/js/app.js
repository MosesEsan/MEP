// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic', 'ui.router', 'myApp.config', 'angularMoment', 'movies', 'tv'])
    .config(function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /movies
        $urlRouterProvider.otherwise("/movies");

    })
    .run(function($ionicPlatform, $rootScope) {

        $rootScope.views = [
            {name: "Movies", icon: "movie_icon.ico", color:"#DCAB34"},
            {name: "TV", icon: "tv_icon.ico", color: "#D23934"}];


        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                $rootScope.currentState = toState.name;
            })
    })


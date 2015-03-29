// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('whynotme', [
  'ionic', 
  'ngCordova.plugins.media', 
  'ngCordova.plugins.splashscreen',
  'whynotme.config.routes',
  'whynotme.controllers', 
  'whynotme.services',
  'whynotme.directives',
  'whynotme.filters'
])
.constant('ALBUMSURL', 'https://s3-eu-west-1.amazonaws.com/whynotme/Albums/')
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

.run(function($ionicPlatform, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    $timeout(function() {
      if(typeof navigator.splashscreen !== 'undefined') {
        navigator.splashscreen.hide();
      }
    },1000);

  });
})



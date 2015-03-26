// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('whynotme', [
  'ionic', 
  'ngCordova.plugins.media', 
  'ngCordova.plugins.splashscreen',
  'whynotme.controllers', 
  'whynotme.services',
  'whynotme.directives'
])
.constant('ALBUMSURL', 'https://s3-eu-west-1.amazonaws.com/whynotme/Albums/')
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.backButton.previousTitleText(false).text('');

  $urlRouterProvider.otherwise('/start');
  
  $stateProvider
    .state('app', {
      url: '/app',
      template: '<ion-nav-view></ion-nav-view>',
      abstract: true,
      controller: 'AppCtrl',
      resolve: {
        Albums: function(Album) {
          return Album.query();
        }
      }
    })

    .state('app.start', {
      url: '/start',
      controller: 'StartCtrl',
      templateUrl: 'views/start.html'
    })

    .state('app.albums', {
      url: '/albums',
      controller: 'AlbumsCtrl',
      templateUrl: 'views/albums.html'
    })

    .state('app.lyrics', {
      url: '/lyrics',
      controller: 'LyricsCtrl',
      templateUrl: 'views/lyrics.html'
    })

    .state('app.chords', {
      url: '/choords',
      controller: 'ChordsCtrl',
      templateUrl: 'views/chords.html'
    })

    .state('app.chord', {
      url: '/chord/:id',
      controller: 'ChordCtrl',
      templateUrl: 'views/chord.html'
    })

    .state('app.detail', {
      url: '/albums/:id',
      controller: 'AlbumCtrl',
      templateUrl: 'views/album.html',
      onExit: function(Mediaplayer) {
        Mediaplayer.stop();
      }
    })

    .state('app.lyric', {
      url: '/lyric/:id',
      controller: 'LyricCtrl',
      templateUrl: 'views/lyric.html'
    })

  
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



(function() {
	'use strict';

	angular.module('whynotme.config.routes', [])
		.config(function($stateProvider, $urlRouterProvider) {
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
})();

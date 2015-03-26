angular.module('whynotme.controllers', [])
	.controller('AppCtrl', function($scope) {
	  
	})

	.controller('AlbumsCtrl', function($scope, Albums) {
		$scope.albums = Albums;
	})

	.controller('StartCtrl', function($scope) {
	
	})

	.controller('LyricsCtrl', function($scope, Albums) {
		$scope.albums = Albums;
	})

	.controller('LyricCtrl', function($scope, $stateParams, Album) {
		$scope.album = Album.get(+$stateParams.id);

		$scope.showLyrics = function(index) {
			$scope.playingIndex = index;
		}
		
		$scope.hideLyrics = function() {
			$scope.playingIndex = '';
		}
	})

	.controller('ChordsCtrl', function($scope, Albums) {
		$scope.albums = Albums;
		
	})

	.controller('ChordCtrl', function($scope, $stateParams, Album) {
		$scope.album = Album.get(+$stateParams.id);

		$scope.showLyrics = function(index) {
			$scope.playingIndex = index;
		}
		
		$scope.hideLyrics = function() {
			$scope.playingIndex = '';
		}
	})

	.controller('AlbumCtrl', function($scope, $stateParams, Album, Mediaplayer, ALBUMSURL, $ionicLoading) {
		$scope.album = Album.get(+$stateParams.id);
		var media = null;

		$scope.load = function() {
				$ionicLoading.show({ template: 'dekk'});
				console.log("Iii");
		}
		
		$scope.play = function(song, index) {
			$scope.playingIndex = index;
		
						
			if(media) { media.stop();}

			media = Mediaplayer.get(ALBUMSURL + song, function(status) {
				if(+status > 2) {
					console.log("running");
					$ionicLoading.hide();
				}
			});

			media.play();
		}

		$scope.stop = function(index) {
			if(media) { media.stop(); }
			$scope.playingIndex = '';
		}
	});
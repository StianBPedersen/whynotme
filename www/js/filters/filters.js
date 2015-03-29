(function() {
	'use strict';

	angular.module('whynotme.filters', [])
		.filter('profanity', function($sce) {
			return function(text) {
				if(text === undefined) return;

				return $sce.trustAsHtml(text.replace(/\[\[\w*\]\]/, "..."));
			}
		});


})();

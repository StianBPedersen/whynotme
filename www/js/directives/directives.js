(function() {
	'use strict';

	angular.module('whynotme.directives', [])
		.directive('loader', function($ionicLoading) {
			return {
				link: function(scope, element, attrs) {
					var classes, arrClasses = [];
					scope.songState = 0;
					$ionicLoading.hide();

					scope.$watch(function() {
						classes = element.attr('class');

						if(+classes.indexOf(" ") > -1) {
							arrClasses = classes.split(" ");

							for(var i=0;i<arrClasses.length;i++) {
								if(arrClasses[i] === 'activated') { 
									$ionicLoading.show({template: 'Loading...'});
								}
							}
						}
					})
				
				}
			}
		})
	
		
})();

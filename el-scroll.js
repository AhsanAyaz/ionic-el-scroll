/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('aa.ionic-el-scroll', []).directive('elScroll', [ '$location','$ionicScrollDelegate',function ($location,$ionicScrollDelegate) {

	return {
		restrict: 'A',
		scope: {
			target:"@elScroll",
			delegate: "@",
			animate: "@"
		},
		
		link: function(scope, element, attrs) {

		},
		
		controller: function($scope, $element, $attrs) {
			var shouldAnimate = $scope.animate;
			$scope.scrollTo = function(){
				$location.hash($scope.target);
				var handle = $ionicScrollDelegate.$getByHandle($scope.delegate);
				handle.anchorScroll(shouldAnimate);
			};
			$element.bind("click",function(e){
				e.preventDefault();
				$scope.scrollTo();
			});
		}
	};
}]);
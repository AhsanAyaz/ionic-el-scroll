/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
	//TODO - put any directive code here
	$scope.items = [];
	for(var i=0,l=10;i<=10;i++){
		$scope.items.push({title:'Section ' + (i+1), id:'section_' + (i+1)});
	}
}]);
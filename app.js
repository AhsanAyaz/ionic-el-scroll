/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [	//additional angular modules
	'ionic',
'aa.ionic-el-scroll'
]).
config(['$stateProvider', '$locationProvider', '$compileProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $compileProvider, $urlRouterProvider) {
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-directives/ionic-el-scroll/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/ionic-el-scroll/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'pages/';
	
	
	// $routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	// $routeProvider.otherwise({redirectTo: appPathRoute+'home'});
	$stateProvider.state('home',{
		url:'/',
		templateUrl: pagesPath + 'home/home.html',
		controlle: 'HomeCtrl'
	});
	 $urlRouterProvider.otherwise('/');
	
}]);
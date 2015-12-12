angular.module('userControl',['ui.router', 'templates', 'ngAria', 'ngAnimate', 'ngMaterial'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html'
			});

			$urlRouterProvider.otherwise('home')
		}])
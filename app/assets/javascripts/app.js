angular.module('userControl',['ui.router', 'templates', 'ngAria', 'ngAnimate', 
								'ngMaterial', 'md.data.table', 'Devise'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'users/_users.html',
				controller: 'UsersController',
				resolve: {
				  userPromise: ['UserService', function(UserService){
				    return UserService.getAll();
				}]}
			})
			.state('user', {
				url: '/user/{id}',
				templateUrl: 'user/_user.html',
				controller: 'UserController',
				resolve: {
			    	user: ['$stateParams', 'UserService', function($stateParams, UserService) {
					return UserService.get($stateParams.id);
				}]}
			})
			.state('login', {
				url: '/login',
				templateUrl: 'auth/_login.html',
				controller: 'AuthController'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'auth/_register.html',
				controller: 'AuthController'
			});

			$urlRouterProvider.otherwise('/')
		}])
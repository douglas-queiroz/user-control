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
				}]},
				onEnter: ['$state', 'Auth', function($state, Auth) {
					if (!Auth.isAuthenticated()) {
						$state.go('login')
					}
				}]
			})
			.state('showUser', {
				url: '/user/show/{id}',
				templateUrl: 'user/_user.html',
				controller: 'UserController',
				resolve: {
			    	user: ['$stateParams', 'UserService', function($stateParams, UserService) {
					return UserService.get($stateParams.id);
				}]},
				onEnter: ['$state', 'Auth', function($state, Auth) {
					if (!Auth.isAuthenticated()) {
						$state.go('login')
					}
				}]
			})
			.state('createUser', {
				url: '/user/new',
				templateUrl: 'newuser/_newUser.html',
				controller: 'NewUserController',
				onEnter: ['$state', 'Auth', function($state, Auth) {
					if (!Auth.isAuthenticated()) {
						$state.go('login')
					}
				}]
			})
			.state('editUser', {
				url: '/user/edit/{id}',
				templateUrl: 'newuser/_newUser.html',
				controller: 'EditUserController',
				resolve: {
			    	user: ['$stateParams', 'UserService', function($stateParams, UserService) {
					return UserService.get($stateParams.id);
				}]}
			})
			.state('login', {
				url: '/login',
				templateUrl: 'auth/_login.html',
				controller: 'AuthController'
			});

			$urlRouterProvider.otherwise('/')
		}])
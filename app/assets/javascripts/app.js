angular.module('userControl',['ui.router', 'templates', 'ngAria', 'ngAnimate', 
								'ngMaterial', 'md.data.table', 'Devise'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		'$httpProvider',
		function($stateProvider, $urlRouterProvider, $httpProvider){
			$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'users/_users.html',
				controller: 'UsersController',
				authenticate: true,
				resolve: {
				  userPromise: ['UserService', function(UserService){
				    return UserService.getAll();
				}]}
			})
			.state('showUser', {
				url: '/user/show/{id}',
				templateUrl: 'user/_user.html',
				controller: 'UserController',
				isPublic: false,
				resolve: {
			    	user: ['$stateParams', 'UserService', function($stateParams, UserService) {
					return UserService.get($stateParams.id);
				}]}
			})
			.state('createUser', {
				url: '/user/new',
				templateUrl: 'newuser/_formUser.html',
				controller: 'NewUserController',
				onEnter: ['$state', 'Auth', function($state, Auth) {
					if (!Auth.isAuthenticated()) {
						$state.go('login')
					}
				}]
			})
			.state('editUser', {
				url: '/user/edit/{id}',
				templateUrl: 'newuser/_formUser.html',
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

			$httpProvider.interceptors.push(function($q, $location, $rootScope) {
			  return {
			    'responseError': function(rejection) {
			      if (rejection.status == 401) {
			        $rootScope.$broadcast('event:unauthorized');
			        $location.path('/login')
			        return rejection;
			      }
			        return $q.reject(rejection);        
			      }
			    };
			  });
		}])
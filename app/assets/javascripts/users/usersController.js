angular.module('userControl')
	.controller('UsersController',[
		'$scope',
		'UserService',
		function($scope, UserService){
			$scope.users = UserService.users;
			
		}])
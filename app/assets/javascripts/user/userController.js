angular.module('userControl')
	.controller('UserController', [
		'$scope',
		'$stateParams',
		'UserService',
		'user',
		function($scope, $stateParams, UserService, user){
			console.log(user);
			$scope.user = user;
			$scope.topDirections = ['left', 'up'];
			$scope.bottomDirections = ['down', 'right'];
			$scope.isOpen = false;
			$scope.availableModes = ['md-fling', 'md-scale'];
			$scope.selectedMode = 'md-fling';
			$scope.availableDirections = ['up', 'down', 'left', 'right'];
			$scope.selectedDirection = 'up';
			
		}])
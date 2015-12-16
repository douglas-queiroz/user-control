angular.module('userControl')
	.controller('NewUserController', [
		'$scope',
		'$state',
		'$stateParams',
		'UserService',
		function($scope, $state, $stateParams, UserService){

			$scope.loadSex = function(){
				$scope.sexs = UserService.loadSex();
			}

			$scope.saveUser = function(){
				UserService.create($scope.user);
				$state.go('home');
			}
			
		}])
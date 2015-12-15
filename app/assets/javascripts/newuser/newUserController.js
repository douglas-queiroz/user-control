angular.module('userControl')
	.controller('NewUserController', [
		'$scope',
		'$state',
		'$stateParams',
		'UserService',
		function($scope, $state, $stateParams, UserService){

			$scope.loadSex = function(){
				$scope.sexs = [{id:1, value: 'Male'},{id:2, value: 'Female'}]
			}

			$scope.saveUser = function(){
				UserService.create($scope.user);
				$state.go('home');
			}
			
		}])
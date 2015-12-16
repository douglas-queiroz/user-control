angular.module('userControl')
	.controller('EditUserController', [
		'$scope',
		'$state',
		'$stateParams',
		'UserService',
		'user',
		function($scope, $state, $stateParams, UserService, user){
			$scope.user = user;

			$scope.loadSex = function(){
				$scope.sexs = UserService.loadSex();
			}

			$scope.saveUser = function(){
				UserService.update($scope.user).success(function(data){
					$state.go('home');
				});
			}
			
		}])
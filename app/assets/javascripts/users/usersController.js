angular.module('userControl')
	.controller('UsersController',[
		'$scope',
		'UserService',
		function($scope, UserService){
			$scope.users = UserService.users;

			$scope.getSex = function(id){
		    	sexs = UserService.loadSex();
		    	for (var i = 0; i < sexs.length; i++) {
		    		if(sexs[i].id == id){
		    			return sexs[i].value;
		    		}
		    	};
			}
			
		}])
angular.module('userControl')
	.controller('UserController', [
		'$scope',
		'$state',
		'$mdDialog',
		'$stateParams',
		'UserService',
		'user',
		function($scope, $state, $mdDialog, $stateParams, UserService, user){
			$scope.user = user;

			$scope.showConfirm = function(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
			    var confirm = $mdDialog.confirm()
			          .title('Delete user')
			          .content('Do you wanna delete this user?')
			          .ariaLabel('Lucky day')
			          .targetEvent(ev)
			          .ok('Yes')
			          .cancel('No');
			    $mdDialog.show(confirm).then(function() {
			    	UserService.destroy(user).then(function(){
			    		$state.go('home');
			    	});
			    }, function() {
			      // No option
			    });
		    };

		    $scope.toggleBlocked = function(){
		    	UserService.toggle_blocked(user).success(function(data){
		    		user.is_blocked = !user.is_blocked;
		    	});
		    }

		    $scope.getSex = function(id){
		    	sexs = UserService.loadSex();
		    	for (var i = 0; i < sexs.length; i++) {
		    		if(sexs[i].id == id){
		    			return sexs[i].value;
		    		}
		    	};
			}
			
		}])
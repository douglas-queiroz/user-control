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
			
		}])
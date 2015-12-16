angular.module('userControl')
	.controller('AuthController', [
	'$scope',
	'$state',
	'Auth',
	'$mdToast',
	function($scope, $state, Auth, $mdToast){
		 $scope.login = function() {
		    Auth.login($scope.user)
		    .then(function(response){
		      if (response.error != undefined) {
		      	$mdToast.show(
			      $mdToast.simple()
			        .content(response.error )
			        .hideDelay(3000)
			    );
		      }else{
		      	$state.go('home');
		      }
		    })
		  };
	}
]);
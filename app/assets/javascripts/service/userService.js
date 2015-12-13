angular.module('userControl')
	.factory('UserService', ['$http',
	function($http){
		o = {
			users: []
		};
		o.getAll = function(){
			return $http.get('/users.json').success(function(data){
				angular.copy(data, o.users);
			});
		};

		o.get = function(id){
			return o.users[id];
		}

		return o;
	}])
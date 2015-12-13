angular.module('userControl')
	.factory('UserService', ['$http',
	function($http){
		o = {
			users: []
		};
		o.getAll = function(){
			return $http.get('/admin/users.json').success(function(data){
				angular.copy(data, o.users);
			});
		};

		o.get = function(id){
			return o.users[id];
		}
		o.create = function(user){
			return $http.post('/admin/users.json', user).success(function(data){
				o.users.push(data);
			});
		}

		return o;
	}])
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
			return $http.get('/admin/users/'+id+'.json').then(function(res){
				return res.data;
			});
		}
		o.create = function(user){
			return $http.post('/admin/users.json', user).success(function(data){
				o.users.push(data);
			});
		}
		o.update = function(user){
			return $http.put('/admin/users/'+user.id+'.json', user);
		}

		o.destroy = function(user){
			return $http.delete('/admin/users/'+user.id+'.json');
		}

		return o;
	}])
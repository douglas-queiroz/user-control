angular.module('userControl')
	.factory('UserService', ['$http',
	function($http){
		o = {
			users: []
		};
		o.getAll = function(){
			angular.copy([
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'},
			{nome: 'Teste', email: 'teste@teste.com', sexo: 'Masculino', nascimento: '05/12/1989'}], o.users);
		};

		o.get = function(id){
			return o.users[id];
		}

		return o;
	}])
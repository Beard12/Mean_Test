app.factory('userFactory', ['$http', function($http){
	function userFactory(){
		this.test = function(user, callback){
			$http.post('/test', user).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.getpolls = function(callback){
			$http.get('/getpolls').then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.getpoll = function(id,callback){
			$http.get('/getpoll/'+id).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.createpoll = function(newpoll, callback){
			$http.post('/createpoll', newpoll).then(function(returned_data){
				callback(returned_data.data);
			})
		}
		this.vote = function(id,option,callback){
			$http.post('/vote/'+id, option).then(function(){
				callback()
			})
		}
		this.deletepoll = function(id,callback){
			$http.get('/deletepoll/'+id).then(function(){
				callback()
			})
		}
	}
	return new userFactory()
}])
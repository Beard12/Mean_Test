app.controller('indexController',['$scope', 'userFactory', '$location', '$cookies', function($scope,userFactory, $location, $cookies){
	$scope.errors = false;
	$scope.messages = [];
	$scope.user={}
	
	$scope.login = function(){
		userFactory.test($scope.user, function(data){
			$scope.messages =[]
			if(data.errors){
				$scope.errors = true;
				for (err in data.errors){
					console.log(data.errors[err].message)
					$scope.messages.push(data.errors[err].message)
				}
			}
			else{
				$cookies.putObject('user',{name: data.name, _id: data._id})
				$location.url('/dashboard')
			}

		})
	}
}])
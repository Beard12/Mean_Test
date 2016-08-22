app.controller('createpollController',['$scope', 'userFactory', '$location', '$cookies',  function($scope, userFactory, $location, $cookies){
	$scope.user = {};
	$scope.errors = false;
	$scope.messages = [];
	$scope.newpoll = {};

	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}

	$scope.createpoll = function(){
		$scope.newpoll.userid = $scope.user._id
		userFactory.createpoll($scope.newpoll,function(data){
			$scope.messages =[]
			if(data.errors){
				$scope.errors = true;
				for (err in data.errors){
					console.log(data.errors[err].message)
					$scope.messages.push(data.errors[err].message)
				}
			}
			else{
				$location.url('/dashboard')
			}
		})
	}
}])
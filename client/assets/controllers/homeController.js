app.controller('homeController',['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){
	$scope.user = {};
	$scope.polls = []

	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
	$scope.getpolls = function(){
		userFactory.getpolls(function(data){
			$scope.polls = data
		})
	}
	$scope.deletepoll = function(id){
		userFactory.deletepoll(id, function(){
			$scope.getpolls()
		})
	}
	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')
	}


	$scope.getpolls()
}])
app.controller('pollController',['$scope', 'userFactory', '$routeParams', '$cookies', '$location', function($scope, userFactory, $routeParams, $cookies, $location){
	$scope.user = {};
	$scope.poll = {};
	$scope.voteoption = {};

	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
	$scope.getpoll = function(){
		userFactory.getpoll($routeParams.id,function(data){
			if(data.name == "CastError"){
				$location.url('/dashboard')
			}
			$scope.poll = data
		})
	}
	$scope.vote = function(option){
		$scope.voteoption.option = option;
		userFactory.vote($routeParams.id,$scope.voteoption, function(){
			$scope.voteoption ={};
			$scope.getpoll()
		})
	}

	$scope.getpoll()
}])
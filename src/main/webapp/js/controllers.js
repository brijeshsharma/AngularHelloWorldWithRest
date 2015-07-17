
sampleApp.controller('MyController', function($scope, $http) {
		   	
		$http({method: 'GET', url: 'rest/test/hello'}).
	    success(function(dataBasket, status, headers, config) {
	    	
	    	$scope.firstName  = dataBasket.firstName;	    }).
	    error(function(data, status, headers, config) {
	    	alert('error occured '+status);
	    });
	
	
  });

sampleApp.controller('MyController1', function($scope, $http) {
   	
	$http({method: 'GET', url: 'rest/test/hello_new'}).
    success(function(dataBasket, status, headers, config) {
    	
    	$scope.firstName  = dataBasket.firstName;	    }).
    error(function(data, status, headers, config) {
    	alert('error occured '+status);
    });


});

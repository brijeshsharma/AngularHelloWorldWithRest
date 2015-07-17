var sampleApp=angular.module('testdemo', ['ngResource']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/rest/test/hello_new', {templateUrl: 'partials/hello.html', controller: 'MyController1'})
        $routeProvider.when('/rest/test/hello', {templateUrl: 'partials/hello.html', controller: 'MyController'})
       //if url not match then below will execute
        .otherwise({redirectTo: '/rest/test/hello'});
    }]);


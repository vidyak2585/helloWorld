angular.module('MyAppModule', [])
    .filter('hello', [function() {
        return function(string) {
            return "Hello World";
        };
    }]);

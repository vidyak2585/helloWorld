describe('Filters', function() { //describe your object type
    beforeEach(module('MyAppModule')); //load module    
    describe('hello', function() { //describe your app name
        var hello;
        beforeEach(inject(function($filter) { //Mock factory and spy on methods
            hello = $filter('hello', {});
        }));

        it('Should return Hello World', function() { //write tests
            expect(hello()).toBe('Hello World'); //pass
        });
    });
});

describe('Filters', function() { //describe your object type
    beforeEach(module('MyApp')); //load module    
    describe('reverse', function() { //describe your app name
        var reverse;
        beforeEach(inject(function($filter) { //Mock our factory and spy on methods
            reverse = $filter('reverse', {});
        }));

        it('Should be reverse a string', function() { //write tests
            expect(reverse('Hello World')).toBe('dlroW olleH'); //pass
            expect(reverse('Vidya')).toBe('aydiV'); //pass
        });

    });
});

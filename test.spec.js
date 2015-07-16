var fizzBuzz = require('./index')

describe('FizzBuzz', function(){
    it('Should say buzz in place of 100', function(){
        expect(fizzBuzz(100)).toBe('buzz')
    });
    it('Should say fizz in place of 3', function(){
        expect(fizzBuzz(3)).toBe('fizz')
    });
    it('Should say fizzbuzz in place of 15', function(){
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })
    it('Should say 2 for 2', function(){
        expect(fizzBuzz(2)).toBe(2)
    })
})

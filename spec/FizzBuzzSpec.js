/**
 * Created by noobjey on 7/22/15.
 */

//"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."


//takes 2 params
//1. name of the test sweet
//2. function that will contain the spec
describe("FizzBuzz", function() {

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });


  describe("when a number is a multiple of 3", function()  {

    //title of spec
    it("should return fizz", function() {
      //  assertion
      //expect takes the action to be tested
      // and the call 'toBe' is a matcher function
      // matcher function defines the expected value
      expect(fizzbuzz.go(3)).toEqual('fizz');
      expect(fizzbuzz.go(36)).toEqual('fizz');
    });

  });

  xdescribe("when a number is a multiple of 5", function() {

    it("should return buzz", function() {
      expect(fizzbuzz.go(5)).toBe('buzz')
      expect(fizzbuzz.go(45)).toBe('buzz')
    })
  });


});

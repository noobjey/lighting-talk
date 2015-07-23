beforeEach(function () {
  // Function to create a custom matcher
  jasmine.addMatchers({
    toBeFizz: function () {
      return {
        // Has to return a function that implements the compare function
        compare: function (actual, expected) {
          return {
            pass: actual === 'fizz'
          };
        }
      };
    }
  });
});

describe("fizzbuzz", function () {
  var fizzBuzz;


  beforeEach(function() {
    fizzBuzz = new FizzBuzz()
  });

  it('expect 1 to return 1', function () {
    expect(fizzBuzz.number(1)).toEqual(1);
  });

});

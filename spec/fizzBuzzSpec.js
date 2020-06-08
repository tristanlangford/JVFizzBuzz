describe("fizzbuzz", function () {
  var fizzBuzz;


  beforeEach(function() {
    fizzBuzz = new FizzBuzz()
  });

  it('expect 1 to return 1', function () {
    expect(fizzBuzz.number(1)).toEqual(1);
  });


  it('expect 3 to return Fizz', function () {
    expect(fizzBuzz.number(3)).toEqual('Fizz');
  });

  it('expect 5 to return Buzz', function () {
    expect(fizzBuzz.number(5)).toEqual('Buzz');
  });

});

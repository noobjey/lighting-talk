//takes 2 params
//1. name of the test sweet
//2. function that will contain the spec
describe("Investment", function() {

  var stock, investment;

  beforeEach(function() {
    stock = new Stock();
    investment = new Investment({
      stock: stock,
      shares: 100,
      sharePrice: 20,
      cost: 2000
    })
  })

  //title of spec
  it("should be of a stock", function() {
    //  assertion
    //expect takes the action to be tested
    // and the call 'toBe' is a matcher function
    // matcher function defines the expected value
    expect(investment.stock).toBe(stock);
  });

  it("should have the invested shares quantity", function() {
    expect(investment.shares).toEqual(100)
  });

  it("should have the share paid price", function() {
    expect(investment.sharePrice).toEqual(20);
  });

  it("should have a cost", function() {
    expect(investment.cost).toEqual(2000);
  });

});

describe('Pizza', function() {
  it("creates a new object with the given properties", function() {
    var testPizza = new Pizza("Medium", (["mushrooms", "pepperoni", "cheese", "sauce"]));
    expect(testPizza.pizzaSize).to.equal("Medium");
    expect(testPizza.pizzaToppings).to.eql(["mushrooms", "pepperoni", "cheese", "sauce"]);
  });
  it("calculates cost of the pizza using the pizzaCost method", function() {
    var testPizza = new Pizza("Large", (["mushrooms", "pepperoni", "cheese", "sauce"]));
    expect(testPizza.pizzaCost()).to.equal(20);
  });
});

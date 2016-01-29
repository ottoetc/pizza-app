describe('Pizza', function() {
  it("creates a new object with the given properties", function() {
    var testPizza = new Pizza("sm", (["mushrooms", "pepperoni", "cheese", "sauce"]));
    expect(testPizza.pizzaSize).to.equal("sm");
    expect(testPizza.pizzaToppings).to.eql(["mushrooms", "pepperoni", "cheese", "sauce"]);
  });
  it("calculates cost of the pizza using the pizzaCost method", function() {
    var testPizza = new Pizza("sm", (["mushrooms", "pepperoni", "cheese", "sauce"]));
    expect(testPizza.pizzaCost()).to.equal(12);
  });
});

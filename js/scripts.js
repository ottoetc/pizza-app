var Pizza = function(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}
// Calculates cost of Pizza starts with a base cost of 8 and modifies based on size and number of toppings
Pizza.prototype.pizzaCost = function() {
  var cost = 8;
  // Large Cost
  if(this.pizzaSize === "Large") {
    cost = cost * 2 + (this.pizzaToppings.length * 1);
  }
  // Medium Cost
  else if (this.pizzaSize === "Medium") {
    cost = cost + 4 + (this.pizzaToppings.length * 1);
  }
  // Small Cost
  else {
    cost = cost + (this.pizzaToppings.length * 1);
  }
  return cost;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // Gets Pizza size from select box
    var inputPizzaSize = $("select.size").val();
    // Gets Pizza toppings by pushing values of all checked topping boxes to an array
    var inputPizzaToppings = [];
    $("input:checked").each(function() { // Targets only checked inputs
      inputPizzaToppings.push($(this).val());
    });
    // Creates Pizza object
    var pizza = new Pizza(inputPizzaSize, inputPizzaToppings);
    console.log("Pizza Object: ", pizza); // This logs the size and toppings of the pizza object

    // Outputs the price of the created pizza
    $("ul#pizzaList").append("<li><span class='pizza'>" + pizza.pizzaCost() + "</span></li>");
  });
});

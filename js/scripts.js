var Pizza = function(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  console.log("Size: ", this.pizzaSize);
  this.pizzaToppings = pizzaToppings;
  console.log("Toppings: ", this.pizzaToppings);
}

Pizza.prototype.pizzaCost = function() {
  var cost = 8;
  if(this.pizzaSize === "Large") {
    cost = cost * 2 + (this.pizzaToppings.length * 1);
    console.log("Large Cost: ", cost);
  } else if (this.pizzaSize === "Medium") {
    cost = cost + 4 + (this.pizzaToppings.length * 1);
    console.log("Medium Cost: ", cost);
  } else {
    cost = cost + (this.pizzaToppings.length * 1);
    console.log("Small Cost: ", cost);
  }
  return cost;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputPizzaSize = $("select.size").val();
    console.log("Pizza Size: ", inputPizzaSize);

    var inputPizzaToppings = [];
    $("input:checked").each(function() {
      inputPizzaToppings.push($(this).val());
    });

    console.log("Toppings Array: ", inputPizzaToppings);
    var pizza = new Pizza(inputPizzaSize, inputPizzaToppings);
    console.log("Pizza: ", pizza);

    $("ul#pizzaList").append("<li><span class='pizza'>" + pizza.pizzaCost() + "</span></li>");
  });
});

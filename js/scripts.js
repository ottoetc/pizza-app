var Pizza = function(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  console.log("Size: ", this.pizzaSize);
  this.pizzaToppings = pizzaToppings;
  console.log("Toppings: ", this.pizzaToppings);
}

Pizza.prototype.pizzaCost = function() {
  var cost = 8;
  if(this.pizzaSize === "lg") {
    cost = cost * 2 + (this.pizzaToppings.length * 1);
    console.log("Large Cost: ", cost);
  } else if (this.pizzaSize === "md") {
    cost = cost + 4 + (this.pizzaToppings.length * 1);
    console.log("Medium Cost: ", cost);
  } else {
    cost = cost + (this.pizzaToppings.length * 1);
    console.log("Small Cost: ", cost);
  }
  return cost;
}

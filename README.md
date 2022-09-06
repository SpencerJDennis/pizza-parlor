Describe: Pizza()

Test: It should return a Pizza object with two properties for toppings and size
Code: const newPizza = new Pizza(["spam", "ham", "yams"], "large");
Expected Output: Pizza { toppings: ["spam", "ham", "yams"], size: "large" }

Describe: Pizza.prototype.priceChecker = function()

Test: It should return the pizzas price after the toppings choices have been made.
Code: this.price = this.toppings.length * 2
Expected Output: this.price;


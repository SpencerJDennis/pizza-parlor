//Business Logic

function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
};


Pizza.prototype.priceChecker = function() {
  toppingsPrice = this.toppings.length * 2
  this.price = toppingsPrice + 10;
  return "Your Pizza Costs: $" + this.price;
};

//User Logic

let pizzaForm = function(event) {
  event.preventDefault();
  let toppings = document.querySelectorAll('input[type="checkbox"]:checked');
  let size = document.getElementById("size").value;
  let newPizza = new Pizza(toppings, size);
  console.log(newPizza)
  document.getElementById("results").innerText = newPizza.priceChecker();
}


window.addEventListener("load", function() {
  const form = document.getElementById("pizza-options");
  form.addEventListener("submit", pizzaForm);
});
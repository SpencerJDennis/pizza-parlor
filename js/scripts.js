function Pizza(toppings = [], size) {
  this.toppings = toppings
  this.size = size
}

function pizzaForm(){
  let topping1 = document.getElementById("ham").value;
  let topping2 = document.getElementById("spam").value;
  let topping3 = document.getElementById("yam").value;
  let size = document.getElementById("size").value
  let newPizza = new Pizza([topping1, topping2, topping3], size)

    if (topping1)
}


window.addEventListener("load", function() {
  const form = document.getElementById("pizza-options")
  form.addEventListener("submit", )
})
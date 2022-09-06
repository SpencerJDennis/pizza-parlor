# _pizza-parlor_
 
#### By _**Spencer Dennis**_
 
#### _This is a website including pizza toppings and sizes._
 
## Technologies Used
 
* _HTML_
* _CSS_
* _JavaScript_
 
 
## Description
 
_A website designed to take user inputed pizza toppings and size; and return a price for the entire pizza._
 
## Setup/Installation Requirements
 
* _Go to my Repository page on [Git Hub](https://github.com/SpencerJDennis/pizza-parlor)_
* _Click on the pizza-parlor repository_
* _You can clone the project yourself to your desktop, if you would like to see how it interacts in the webrowser_
* _Once you have the project cloned open up the folder located on your desktop called pizza-parlor._
* _Once you have the folder open click on the index.html file. This should open up your web browser and you can interact with the site._ 
 
## Known Bugs
 
* _No known issues_

## TDD
 
Describe: Pizza()

Test: It should return a Pizza object with two properties for toppings and size
Code: const newPizza = new Pizza(["spam", "ham", "yams"], "large");
Expected Output: Pizza { toppings: ["spam", "ham", "yams"], size: "large" }

Describe: Pizza.prototype.priceChecker = function()

Test: It should return the pizzas price after the toppings choices have been made.
Code: this.price = this.toppings.length * 2
Expected Output: this.price;

## License

_MIT_
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 
Copyright (c) _09/06/2022_ _Spencer Dennis_
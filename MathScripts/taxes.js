var monthly =  1000
var tax = .23

var monthlyTax = (monthly * tax)
monthlyTax = Math.round(monthlyTax * 100) / 100;
var message = "monthly withheld " + monthlyTax;

console.log(message)
var PersonBuilder = require("./PersonBuilder");

// Employees
var mugz = new PersonBuilder("Mugisha").makeEmployee().makeManager(60).build();
var lala = new PersonBuilder("Malaïka").makeEmployee().makePartTime().build();
var malik = new PersonBuilder("Malik").makeEmployee().build();

// Shoppers
var munz = new PersonBuilder("Munia")
	.withMoney(500)
	.withList(["jeans", "sunglasses", "pearl earrings"])
	.build();
var mimi = new PersonBuilder("Misao").withMoney(1000).build();
console.log(mugz.toString());
console.log(munz.toString())
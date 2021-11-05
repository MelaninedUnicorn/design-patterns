var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");
var boots = new CatalogItem("Louboutin Boots", 719.99);
var sneakers = new CatalogItem("Fenty Puma", 139.99);
var flipFlops = new CatalogItem("Nike Sandals", 119.99);

var group_shoes = new CatalogGroup("Nice Shoes", [boots, sneakers, flipFlops]);
var group_food = new CatalogGroup("Nice Meals", [
	new CatalogItem("Yassa Chicken with rice", 15.99),
	new CatalogGroup("Side Dishes", [
		new CatalogItem("Yassa Chicken", 12.99),
		new CatalogItem("Pondu", 17.99),
		new CatalogItem("Makayabu", 13.99),
	]),
	new CatalogItem("Gombo with Fufu", 15.99),
    new CatalogItem("Pondu with Fufu", 15.99),
]);
console.log("boots total: ", `$${boots.total}`);
console.log("shoes total: ", `$${group_shoes.total}`);
console.log("meals total: ", `$${group_food.total}`);
boots.print();
sneakers.print();

group_shoes.print();
group_food.print();

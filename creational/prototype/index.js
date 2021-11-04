var scout_prototype = require('./scout_prototype');

var mugz = scout_prototype.clone();
mugz.name = "Princess Mugisha";
mugz.addItemToList('Flower crown');

var munz = scout_prototype.clone();
munz.name = "Princess Munia";
munz.addItemToList('Pearl bracelet');

console.log( `${mugz.name}: ${mugz.shoppingList}` );
console.log( `${munz.name}: ${munz.shoppingList}` );

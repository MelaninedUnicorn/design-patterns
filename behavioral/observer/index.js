var Store = require("./Store");
var Shopper = require("./Shopper");
var Mall = require("./Mall");

var unicornHorn = new Store("The Unicorn Horn Shop");
var elfJewelry = new Store("Elf Jewelry Store");

var mugz = new Shopper("Mugz");
var bibi = new Shopper("Beniami");
var munz = new Shopper("Munia");
var lala = new Shopper("Malaïka");
var mimi = new Shopper("Misao");

var fairyLandMall = new Mall();

unicornHorn.subscribe(mugz);
unicornHorn.subscribe(bibi);

unicornHorn.subscribe(mimi);
unicornHorn.subscribe(fairyLandMall);

elfJewelry.subscribe(mugz);
elfJewelry.subscribe(munz);
elfJewelry.subscribe(lala);
elfJewelry.subscribe(fairyLandMall);

unicornHorn.sale(20);
elfJewelry.sale(50);

console.log(fairyLandMall.sales);

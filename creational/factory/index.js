var userFactory = require('./userFactory')
var mugz = userFactory('Mugisha Kakou', 100);
var munz = userFactory('Munia Badibanga', 100,'employee', 'HNFLO');

munz.payDay(1000);
console.log( mugz.toString() )
console.log( munz.toString() )

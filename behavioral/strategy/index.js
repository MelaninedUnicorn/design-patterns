var logger = require('./Logger');


logger.log('All Hail Mugisha');
logger.log('The prettiest unicorn in town! ');
logger.log(`Doesn't she look good!`);


logger.changeStrategy('toFile');

logger.log('All Hail Mugisha');
logger.log('The prettiest unicorn in town! ');
logger.log(`Doesn't she look good!`);

logger.changeStrategy('toMorseCode');
logger.log('All Hail Mugisha');
logger.log('The prettiest unicorn in town! ');
logger.log(`Doesn't she look good!`);
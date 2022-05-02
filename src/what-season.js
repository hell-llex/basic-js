const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!'
  try {date.getTime();} 
  catch (error) {throw new Error('Invalid date!');}
  let x = date.getMonth() + 1
  if (x <= 2 || x === 12) return 'winter'
  else if (x <= 5 && x > 2) return 'spring'
  else if (x <= 8 && x > 5) return 'summer'
  else if (x <= 11 && x > 8) return 'autumn'
}

module.exports = {
  getSeason
};

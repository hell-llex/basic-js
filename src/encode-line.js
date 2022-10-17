const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str, res = '') {
  str = str.split('');
  for (let i = 0, c = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      c++;
    } else if (str[i] !== str[i + 1] && str[i] === str[i - 1]) {
      res += `${++c}${str[i]}`;
      c = 0;
    } else res += `${str[i]}`;
  }
  return res;
}

module.exports = {
  encodeLine
};

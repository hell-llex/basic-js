const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2, c = 0) {
  [...s1].forEach(el => {
      if (~s2.indexOf(el)) {
          s2 = s2.replace(el, '*');
          c++;
      }
  })
  return c;
}

module.exports = {
  getCommonCharacterCount
};

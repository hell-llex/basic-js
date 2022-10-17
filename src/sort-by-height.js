const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr, n = -1) {
  const acc = arr.slice()
  arr = arr.sort((a, b) => a - b).filter(elem => elem !== n)
  let count = acc.length - arr.length
  for (let i = 0; i < count; i++) {
    arr.splice(acc.indexOf(n), 0, n);
    acc[acc.indexOf(n)] = '-'
  }
  return arr
}

module.exports = {
  sortByHeight
};

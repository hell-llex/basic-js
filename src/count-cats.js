const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mat) {
  let result = []
    mat.forEach(elem => 
        (elem.filter(item => item === '^^' && item.length === 2)) != 0 ? 
        result.push(elem.filter(item => item === '^^' && item.length === 2)) : 
        0)
    return result.join('').split(',').join('').length / 2
}

module.exports = {
  countCats
};

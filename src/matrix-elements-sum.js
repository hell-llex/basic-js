const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let x = 0;
    console.log(matrix)
    matrix.forEach((elem, i) => {
        elem.forEach((elem1, il) => {
            if(elem1 === 0) {
                for (let index = 0; index < matrix.length - 1; index++) {
                    matrix[index + 1][il] = 0
                }
            
            }
            x += elem1
        });
    });
    return x
}

module.exports = {
  getMatrixElementsSum
};

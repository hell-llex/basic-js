const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let acc = [];
    for (let l = 0; l < matrix[i].length; l++) {
      let c = 0;
      if (l == 0) {
        if (matrix[i][l + 1]) c++
        if (i != 0 && i != matrix.length - 1) {
          if (matrix[i + 1][l]) c++
          if (matrix[i + 1][l + 1]) c++
          if (matrix[i - 1][l]) c++
          if (matrix[i - 1][l + 1]) c++
        } else if (i == 0) {
          if (matrix[i + 1][l]) c++
          if (matrix[i + 1][l + 1]) c++
        } else if (i == matrix.length - 1) {
          if (matrix[i - 1][l]) c++
          if (matrix[i - 1][l + 1]) c++
        }
      }
// -------------------------------------------------
      else if (l == matrix[i].length - 1) {
        if (matrix[i][l - 1]) c++
        if (i != 0 && i != matrix.length - 1) {
          if (matrix[i + 1][l]) c++
          if (matrix[i + 1][l - 1]) c++
          if (matrix[i - 1][l]) c++
          if (matrix[i - 1][l - 1]) c++
        } else if (i == 0) {
          if (matrix[i + 1][l]) c++
          if (matrix[i + 1][l - 1]) c++
        } else if (i == matrix.length - 1) {
          if (matrix[i - 1][l]) c++
          if (matrix[i - 1][l - 1]) c++
        }
      }
// -------------------------------------------------
      else if (l != 0 && l != matrix[i].length - 1) {
        if (matrix[i][l - 1]) c++
        if (matrix[i][l + 1]) c++
        if (i != 0 && i != matrix.length - 1) {
          if (matrix[i + 1][l]) c++
          if (matrix[i + 1][l - 1]) c++
          if (matrix[i - 1][l]) c++
          if (matrix[i - 1][l - 1]) c++
          if (matrix[i + 1][l + 1]) c++
          if (matrix[i - 1][l + 1]) c++
        }
        else if (i == 0) {
          if (matrix[i + 1][l]) c++
          if (matrix[i + 1][l - 1]) c++
          if (matrix[i + 1][l + 1]) c++
        }
        else if (i == matrix.length - 1) {
          if (matrix[i - 1][l]) c++
          if (matrix[i - 1][l - 1]) c++
          if (matrix[i - 1][l + 1]) c++
        }
      }
      acc.push(c)
    }
    res.push(acc)
  }
  return res
}

module.exports = {
  minesweeper
};

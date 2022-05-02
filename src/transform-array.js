const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
    let arr0 = arr.slice();
        arr0.forEach((elem, i) => {
          if(typeof elem === 'string'){
            if(elem === '--discard-next' && i != arr0.length - 1) {
              if(typeof arr0[i+2] === 'string') arr0.splice(i, 3)
              else arr0.splice(i + 1, 1)
            } else if(elem === '--discard-next' && i === arr0.length - 1) arr0.splice(i, 1)
            if(elem === '--discard-prev' && i != 0)              {
              arr0.splice(i - 1, 2)
            } else if(elem === '--discard-prev' && i === 0) arr0.splice(i, 1)
            if(elem === '--double-next' && i != arr0.length - 1) {
              arr0.splice(i, 1, arr0[i + 1]);
            } else if(elem === '--double-next' && i === arr0.length - 1) arr0.splice(i, 1)
            if(elem === '--double-prev' && i != 0)              {
              arr0.splice(i, 1, arr0[i - 1]);
            } else if(elem === '--double-prev' && i === 0) arr0.splice(i, 1)
          }
        })
  return arr0
}

module.exports = {
  transform
};

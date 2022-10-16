const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // const arr = names.slice();
  // arr.forEach((elem, i) => {
  //   let res = arr.filter(item => item === elem);
  //   res = res.map((item, index) => (index !== 0) ? `${item}(${index})` : item);
  //     if (arr.filter(item => item === elem).length > 1) {
  //       let acc = arr.map((item, l) => (item !== elem) ? item : '+');
  //       res.forEach((el, j) => {
  //         arr[acc.indexOf('+')] = res[j];
  //         acc[acc.indexOf('+')] = '-';
  //       });
  //     }
  // })
  // return arr
  const arr = names.slice();
  arr.forEach((elem, i) => {
      let acc = arr.filter(item => item === elem);
      if (acc.length > 1) {
        acc = acc.map((item, index) => (index !== 0) ? `${item}(${index})` : item);
        acc.forEach((el, j) => j > 0 ? arr[arr.indexOf(elem, arr.indexOf(elem) + 1)] = el : arr[arr.indexOf(elem)] = el);
    }
  })
  return arr;
}

module.exports = {
  renameFiles
};

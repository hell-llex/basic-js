const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const accObj = {}, res = {};
  const arr = domains.map(elem => elem = elem.split('.').reverse()).flat(2);
  arr.forEach((elem, i) => {
    let acc = arr.filter(el => el === elem);
    accObj[`.${elem}`] = acc.length;
  })
  let x = '';
  for (const key in accObj) {
    x += key
    res[`${x}`] = accObj[key];
  }
  return res
}

module.exports = {
  getDNSStats
};

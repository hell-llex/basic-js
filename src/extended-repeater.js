const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof str != 'string') str = String(str)
    let z = Object.getOwnPropertyNames(options),
        res,addit,additSep,sep,n_str,n_adit,
        def_additionSeparator = '|',
        def_separator = '+';
    if(z.includes('additionRepeatTimes')) { // кол-во повторений адитион
        n_adit = options.additionRepeatTimes
    } else n_adit = 1
    if(z.includes('additionSeparator')) { // разделительные повторы адитион
        additSep = options.additionSeparator
    } else {additSep = def_additionSeparator} 
    if(z.includes('addition')) { // после каждого повторения строки 
        addit = ((options.addition + additSep).repeat(n_adit)).slice(0, -additSep.length)
    }
    if(z.includes('separator')) { // разделение повторений строки
        sep = options.separator
    } else {sep = def_separator}
    if(z.includes('repeatTimes')) { // кол-во повторений строки
        n_str = options.repeatTimes
        z.includes('addition') ? res = ((str + addit + sep).repeat(n_str)).slice(0, -sep.length) :
        res = ((str + sep).repeat(n_str)).slice(0, -sep.length)
    } else {z.includes('addition') ? res = ((str + addit + sep).repeat(1)).slice(0, -sep.length) :
    res = ((str + sep).repeat(1)).slice(0, -sep.length)}
    return res
}

module.exports = {
  repeater
};

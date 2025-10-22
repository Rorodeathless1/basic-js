const { NotImplementedError } = require('../lib');

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
  const baseStr = String(str);

  const addition = options.addition !== undefined ? String(options.addition) : '';

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let additionStr = '';
  
  if (options.hasOwnProperty('addition') || addition !== '') {
      additionStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }

  const combinedUnit = baseStr + additionStr;

  return Array(repeatTimes).fill(combinedUnit).join(separator);
}

module.exports = {
  repeater
};

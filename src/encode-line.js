const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str.length) {
    return '';
  }

  let encodedString = '';
  let count = 1;
  let i = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      const prefix = count > 1 ? count : '';
      encodedString += `${prefix}${str[i]}`;

      count = 1;
    }
  }

  return encodedString;
}

module.exports = {
  encodeLine
};

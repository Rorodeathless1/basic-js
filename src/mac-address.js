const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const isHexDigit = (char) => {
    const upperChar = char.toUpperCase();
    const code = upperChar.charCodeAt(0);

    if (code >= 48 && code <= 57) {
      return true;
    }

    if (code >= 65 && code <= 70) {
      return true;
    }

    return false;
  };

  const groups = inputString.split('-');

  if (groups.length !== 6) {
    return false;
  }

  for (const group of groups) {
    if (group.length !== 2) {
      return false;
    }

    if (!isHexDigit(group[0]) || !isHexDigit(group[1])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};

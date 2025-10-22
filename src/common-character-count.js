const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function createCharMap(s) {
  const map = {};
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}

function getCommonCharacterCount(s1, s2) {
  const map1 = createCharMap(s1);
  const map2 = createCharMap(s2);

  let commonCount = 0;

  for (const char in map1) {
    if (map2[char]) {
      const countInS1 = map1[char];
      const countInS2 = map2[char];
      
      commonCount += Math.min(countInS1, countInS2);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};

const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = String(n);
  const results = [];

  for (let i = 0; i < s.length; i++) {
    const newString = s.slice(0, i) + s.slice(i + 1);

    results.push(Number(newString));
  }

  return Math.max(...results);
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  let totalSum = 0;
  const hauntedColumns = new Array(matrix[0].length).fill(false);

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const currentValue = matrix[r][c];

      if (hauntedColumns[c]) {
        continue;
      }

      if (currentValue === 0) {
        hauntedColumns[c] = true;
      }

      if (!hauntedColumns[c]) {
        totalSum += currentValue;
      }
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};

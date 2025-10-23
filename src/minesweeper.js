const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const resultMatrix = Array.from({ length: rows }, () => new Array(cols).fill(0));

  const neighborOffsets = [
    [-1, -1], [-1, 0], [-1, 1], 
    [0, -1],          [0, 1],  
    [1, -1], [1, 0],  [1, 1]   
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      for (const [dr, dc] of neighborOffsets) {
        const neighborR = r + dr;
        const neighborC = c + dc;

        const isNeighborInBounds = neighborR >= 0 && neighborR < rows && neighborC >= 0 && neighborC < cols;

        if (isNeighborInBounds && matrix[neighborR][neighborC] === true) {
          resultMatrix[r][c] += 1;
        }
      }
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};

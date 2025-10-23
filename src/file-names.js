const { NotImplementedError } = require('../lib');

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
  const nameCounts = {};

  const result = [];

  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    let newName = currentName;

    if (nameCounts[newName] !== undefined) {
      let k = nameCounts[newName];

      do {
        newName = `${currentName}(${k})`;
        k++;
      } while (nameCounts[newName] !== undefined); 
      nameCounts[currentName] = k - 1; 

      nameCounts[newName] = 1;

    } else {
      nameCounts[newName] = 1;
    }

    result.push(newName);
  }

  return result;
}

module.exports = {
  renameFiles
};

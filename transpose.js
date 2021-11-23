const transpose = function(matrix) {
  const newArray = [];

  if (matrix.length === 1) {
    for (let j = 0; j < matrix[0].length; j++) {
      let original = matrix[0][j];
      newArray.push([original]);
    }
  } else {
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    } 
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        let original = matrix[row][column];
        newArray[column].push(original);
      } 
    }
  }
  return newArray;
};

module.exports = transpose;
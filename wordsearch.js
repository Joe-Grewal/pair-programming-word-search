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

// Input is 2d array of letters and a word
// check to see if the word exists either horizontally or vertically
// PSEUDO CODE
// iterate through horizontally
//  check for the string
// transpose matrix 
//  iterate again and check again

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return "This array is empty";
    }
    if (typeof(word) !== 'string') {
        return "This word is not a string";
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
     return false;
};

module.exports = wordSearch;
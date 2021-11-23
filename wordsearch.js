const transpose = require('./transpose');

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
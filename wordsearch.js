// Pair Programming - Word Search
// @Sunnyhundal 
// @Sebas024
const wordSearch = (letters, word) => {
  // stores strings in the row
  const horizontalJoin = letters.map(ls => ls.join(''));
  // Looking for word in the in horozontal join, and returning true if a match is found
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  // Array to store words found in the vertical rows
  const verticalJoin = [];
  // Takes chars from vertical entriries and turns them into a string that is pushed into verticalJoin array for search later 
  for (let index = 0; index < letters[0].length; index++) {
    let verticalChar = '';
    for (let i = 0; i < letters.length; i++) {
      verticalChar += letters[i][index];
    }
    verticalJoin.push(verticalChar);
    //search verticalJoin to see if words matcht the content of the array entries. True, if there is a match. Otherwise, it's false.
    for (let v of verticalJoin) {
        
      if (v.includes(word)) {
        return true;
      }
    }
  }

  return false;
};
// Export wordSearch for use outside file 
module.exports = wordSearch;
/*
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
  let lengthWord = s.length;

  return (lengthWord % 2 == 0) ? s[lengthWord / 2 - 1] + s[lengthWord / 2] : s[(lengthWord - 1) / 2 ];
}
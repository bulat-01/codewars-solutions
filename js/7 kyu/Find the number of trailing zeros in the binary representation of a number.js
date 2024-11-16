/*
  Given a number n, find the number of trailing zeros in its binary representation.
*/

function trailingZeros(n) {
  let numBin = n.toString(2);
  let count = 0;

  for (let i = numBin.length - 1; i >= 0; i--) {
      if (numBin[i] == '0') {
          count++;
      } else {
          break;
      }
  }
  
  return count;
}
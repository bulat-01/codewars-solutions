/*
    Given an array of integers, find the one that appears an odd number of times.

    There will always be only one integer that appears an odd number of times. 
*/

function findOdd(A) {
    const map = new Map();
    
    A.forEach(num => {
      if(!map.has(num)) {
        map.set(num, 1)
      }
      
      else {
        map.set(num, map.get(num) + 1);
      }
    });
    
    return [...map].find(([key, value]) => value  % 2 != 0)[0];
}
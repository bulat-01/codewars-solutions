/*
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){
    const noDublicate = new Set();
    
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; i++) {
      if(noDublicate.has(str[i])) {
        return false;
      }

      else {
        noDublicate.add(str[i]);
      }
    }
  
    return true;
  }
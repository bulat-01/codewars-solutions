function isIsogram(str){
    const noDublicate = new Set();
    
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; i++) {
      if(noDublicate.has(str[i])) {
        return false;
      } else {
        noDublicate.add(str[i]);
      }
      
    }
  
    return true;
  }
function multiply(number){
    let lengthNumber = String(Math.abs(number)).length;
    return number * 5 ** lengthNumber;
  }
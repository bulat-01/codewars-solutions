function squareDigits(num){
    let result = num.toString().split('').map(item => item ** 2).join('');
    return Number(result);
  }
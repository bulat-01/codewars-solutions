/*
  Given an integral number, determine if it's a square number
*/

var isSquare = function(n){
    return (Math.pow(n, 0.5) % 1 == 0) ? true : false; 
  }
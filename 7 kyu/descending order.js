function descendingOrder(n){
    n = parseInt(n.toString().split('').sort((a, b) => b - a).join('')); 
    return n;
}
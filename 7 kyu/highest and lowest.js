function highAndLow(numbers){
    const arrNumbers = numbers.split(' ').map(number => +number);
    const max = Math.max(...arrNumbers);
    const min = Math.min(...arrNumbers);
    return max + ' ' + min;
}
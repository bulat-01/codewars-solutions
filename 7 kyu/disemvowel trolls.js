function disemvowel(str) {
    return str.split('').filter(item => !("aeouiAEOUI".includes(item))).join('');
 }
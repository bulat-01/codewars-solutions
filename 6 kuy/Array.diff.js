/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
*/

function arrayDiff(a, b) {
    const values = new Set(b)
    
    return a.filter(value => !values.has(value));
}
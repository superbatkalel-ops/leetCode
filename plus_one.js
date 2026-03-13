/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digit = digits.join('') + 1
    console.log(digit);
    return String(digit).split('').map(Number)
};

digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits))
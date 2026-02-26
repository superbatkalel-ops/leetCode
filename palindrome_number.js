var isPalindrome = function(x) {
    if (x[0] === x[x.length-1]){
        return true;
    }
    else {return false;}
};
x = -121
console.log(isPalindrome(x.toString()))
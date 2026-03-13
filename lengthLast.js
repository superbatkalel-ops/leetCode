var lengthOfLastWord = function(s) {
    let noSpace = s.split(' ');
    for (let i = noSpace.length - 1; i >= 0; i--){
        if(noSpace[i] !== ''){
            return noSpace[i].length;
        }
    }
    
};
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))
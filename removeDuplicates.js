var deleteDuplicates = function(head) {
    for (let i = 0; i < head.length; i++){
        if(head[i] === head[i+1]){
            head.splice(i, 1);
            i--; 
        }
    }
    return head;
};
head = [1,1,2]
console.log(deleteDuplicates(head));
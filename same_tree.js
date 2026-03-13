var isSameTree = function(p, q) {

    if (p.length !== q.length) return false;

    for (let i = 0; i < p.length; i++) {
        if (p[i] !== q[i]) {
            return false;
        }
    }

    return true;
};
p = [1, 2];
q = [1, null, 2];
console.log(p.length);
console.log(q.length);
console.log(isSameTree(p, q)); 
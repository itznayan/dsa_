/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    /*
    0 1 1 2 3 5 8 12 ...

    */

    if(n<2){
        return n;
    }
    let cur=1,prev=0,next
    for(i=2;i<=n;i++){
        next=prev+cur;
        prev=cur
        cur=next
    }
    return next
};
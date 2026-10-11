/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copyNum=x
    let revNum=0
    while(copyNum>0){
        let lastDigit=copyNum%10;
        revNum=revNum*10+lastDigit
        copyNum=Math.floor(copyNum/10)
    }

    return x==revNum
};
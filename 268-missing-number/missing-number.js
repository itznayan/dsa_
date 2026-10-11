/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum=0
    let totalNo=nums.length
    let sumOfAll=totalNo*(totalNo+1)/2
    for(i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    return sumOfAll-sum
    
};
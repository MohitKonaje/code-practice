/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    
    let resultArray = [];
    let lastnum = 0;
    nums.forEach(num =>{
        resultArray.push(lastnum + num) ;
        lastnum = lastnum + num;
    });
    return resultArray;
    
};
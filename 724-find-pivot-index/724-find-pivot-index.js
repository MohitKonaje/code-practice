/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let index = 0
    for (let value of nums ){
        
       let lSum = arraySum(index,nums,"left");
       let rSum = arraySum(index,nums,"right");
        //console.log("lsum", lSum);
        //console.log("rsum", rSum);
       // console.log("index",index);
        
        
        if(lSum == rSum){
            return index;
        }
        index ++;
    }
    
    function arraySum(index,inputArray,direction){
        
        let slicedArray=[]
        if(direction == "left"){
        slicedArray = inputArray.slice(0,index);
        }else{
        slicedArray= inputArray.slice(index + 1);
        }
        
        let sum=0;
        for(let num of slicedArray){
            sum = sum + num;
        }
        return sum;
    }
    
    return -1;
};
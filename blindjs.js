// two sum brute force o(n^2)
var twoSum = function(nums, target) {
    let indices
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) indicies = [i, j]
        }
    }
    return indicies
};
// two sum with o(n) with cache
var twoSum = function(nums, target) {
    let indicies = {}
    for (let i = 0; i < nums.length; i++){
        if ((target - nums[i]) in indicies){
            return [i, indicies[target - nums[i]]]
        }
        indicies[nums[i]] = i
    }
};
// two sum brute force
var twoSum = function(nums, target) {
    let indicies = {}
    for (let i = 0; i < nums.length; i++){
        if ((target - nums[i]) in indicies){
            return [i, indicies[target - nums[i]]]
        }
        indicies[nums[i]] = i
    }
};

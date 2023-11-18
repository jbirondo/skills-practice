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
// max profit two pointer
var maxProfit = function(prices) {
    let max = 0;
    let p_one = prices[0];
    let p_two = prices[0];
    for (let i = 0; i < prices.length; i++){
        if (prices[i] > p_two){
            p_two = prices[i];
            max = Math.max(max, p_two - p_one)
        } else if ( prices[i] < p_one) {
            p_one = prices[i];
            p_two = prices[i];
        }
    }
    return max
};
// contains duplicate using a hash
var containsDuplicate = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++){
        if (nums[i] in obj){
            return true
        }
        obj[nums[i]] = i
    }
    return false
};
// productExceptSelf using forward and reverse pass
var productExceptSelf = function(nums) {
    forward_pass = Array(nums.length).fill(1);
    reverse_pass = Array(nums.length).fill(1);
    forward_value = 1
    reverse_value = 1
    res = []
    for (let i = 0; i < nums.length; i++){
        forward_value = nums[i] * forward_value;
        forward_pass[i] = forward_value
    }
    for (let i = nums.length - 1; i >= 0; i--){
        reverse_value = nums[i] * reverse_value;
        reverse_pass[i] = reverse_value
    }
    forward_pass.unshift(1)
    forward_pass.push(1)
    reverse_pass.unshift(1)
    reverse_pass.push(1)
    for (let i = 1; i < nums.length + 1; i++){
        res.push(forward_pass[i - 1] * reverse_pass[i + 1])
    }
    return res
};
// maximum subarray o(n) time o(1) space
var maxSubArray = function(nums) {
    currentSum = 0;
    finalSum = Math.max(...nums)
    for (let i = 0; i < nums.length; i++){
        currentSum += nums[i]
        if (currentSum < 0){
            currentSum = 0
        } else {
            finalSum = Math.max(finalSum, currentSum)
        }
    }
    return finalSum
};
// maximum product subarray dp approach
var maxProduct = function(nums) {
    let forward = Array(nums.length).fill(1);
    max = Math.max(...nums);
    currentSum = forward[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0){
            currentSum = 1
            continue
        }
        currentSum *= nums[i]
        forward[i] = currentSum
        max = Math.max(max, currentSum)
    }
    let reverse = Array(nums.length).fill(1);
    currentSum = reverse[nums.length - 1]
    for (let i = nums.length - 1; i >= 0; i-- ){
        if (nums[i] == 0){
            currentSum = 1
            continue
        }
        currentSum *= nums[i]
        reverse[i] = currentSum
        max = Math.max(max, currentSum)
    }
    return max
};
// maximum product subarray currentMax and currentMin approach
var maxProduct = function(nums) {
    let product = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];

    for(let i=1; i<nums.length; i++){
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        currentMax = Math.max(nums[i]*prevMax, nums[i], nums[i]*prevMin);
        currentMin = Math.min(nums[i]*prevMin, nums[i], nums[i]*prevMax);

        prevMax = currentMax;
        prevMin = currentMin;

        product = Math.max(currentMax, product);
    }

    return product;
};

// find minimum in rotated sorted array recursive remember to return the recurse call

const findMin = (nums, start = 0, end = nums.length - 1) => {
  const left = nums[start];
  const right = nums[end];
  const mid = Math.floor((start + end) / 2);
  const middle = nums[mid];
  if (left > middle) return findMin(nums, start + 1, mid);
  if (middle > right) return findMin(nums, mid + 1, end);
  return left
};

// valid anagram by creating objs of character counts of string and target then comparison

var isAnagram = function(s, t) {
    let hashS = createHash(s)
    let hashT = createHash(t)
    for (const [key, value] of Object.entries(hashT)) {
        if ( key in hashS && hashS[key] == value) {
            delete hashS[key]
        } else {
            return false
        }
    }
    return Object.keys(hashS).length == 0
}

var createHash = function(s) {
    res = {}
    for (let i = 0; i < s.length; i++ ) {
        if (s[i] in res) {
            res[s[i]] += 1
        } else {
            res[s[i]] = 1
        }
    }
    return res
}
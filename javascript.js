// two-sum
// brute force

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

};

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
// optimized
var twoSum = function (nums, target) {
   const mp = {}

   for (let i = 0; i < nums.length; i++) {
   	const diff = target - nums[i]
   
   	if (diff in mp) return [i, mp[diff]]

   	mp[nums[i]] = i
   }
}

// Best Time to Buy and Sell Stock

const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

//recursion

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitRecursion = function(prices) {
    let dp = new Array(prices.length+1);
    for(let i = 0;i<dp.length;i++){
        dp[i] = new Array(2).fill(-1);
    }
    let ans = solve(prices, 0, 1, dp);
    return ans;
};

var solve = (arr, i, buy, dp)=>{
    if(i>=arr.length) return 0;
    if(dp[i][buy]!=-1) return dp[i][buy];
    if(buy){
        dp[i][buy] = Math.max(solve(arr, i+1, buy, dp), solve(arr, i+1, 0, dp)- arr[i])
    }else{
        dp[i][buy] = Math.max(solve(arr, i+1, buy, dp), arr[i])
    }
    return dp[i][buy];
}

// contains dup

// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
        obj[nums[i]]=1;
        }else{
            return true;
        }
    }
    return false;
};

//238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }

  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;
};

// 53. Maximum Subarray

var maxSubArray = function(nums) {
    // Initialize the max sum...
    let maxSum = nums[0];
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        // if nums[i] > maxSum then maxSum = nums[i]...
        if (nums[i] > maxSum)
            maxSum = nums[i];
    }
    return maxSum;      // return the contiguous subarray which has the largest sum...
};

// Divide and conquer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    function helper(nums, start, end) {
        if (start === end) {
            const ansObj = {
                maxPrefixSum: nums[start],
                maxSuffixSum: nums[start],
                totalSum: nums[start],
                maxSubArraySum: nums[start]
            };
            
            return ansObj;
        }
        
        const left = helper(nums, start, ~~((start+end)/2));
        const right = helper(nums, ~~((start+end)/2 + 1), end);
        
        const ansObj = {
            maxPrefixSum: Math.max(left.maxPrefixSum, left.totalSum + right.maxPrefixSum),
            maxSuffixSum: Math.max(right.maxSuffixSum, right.totalSum + left.maxSuffixSum),
            totalSum: left.totalSum + right.totalSum,
            maxSubArraySum: Math.max(left.maxSubArraySum, right.maxSubArraySum, left.maxSuffixSum + right.maxPrefixSum)
        };
        
        return ansObj;
    }
    
    return helper(nums, 0, nums.length-1).maxSubArraySum;
};

// 153. Find Minimum in Rotated Sorted Array

const findMin = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = ~~((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
};

// recursion

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums[0] <= nums[nums.length-1]){
        return nums[0]
    }
    let mid = Math.ceil(nums.length/2)
    if(nums[mid]<nums[mid-1]){
        return nums[mid]
    } else if (nums[mid]>nums[nums.length-1]){
        return findMin(nums.slice(mid, nums.length))
    }  else if(nums[mid] < nums[0]){
        return findMin(nums.slice(0, mid))
    }  
};

// 33. Search in Rotated Sorted Array

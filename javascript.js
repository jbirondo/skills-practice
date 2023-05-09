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
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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    
    // When dividing the roated array into two halves, one must be sorted.
    
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
        
      } else {
        // target is in the right
        left = mid + 1;
      }
    } 
    
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;

      } else {
        // target is in the left
        right = mid - 1;
      }
    }
    
    
  }
    
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var rotatedSearch = function(nums, target, left = 0, right = nums.length - 1) {
    if (nums.length <= 1) {
        return nums[0] === target ? 0 : -1
    }

    // Edge case
    if (right - left === 1) {
        if (nums[left] === target) {
            return left;
        } else if (nums[right] === target) {
            return right;
        } else {
            return -1;
        }
    }

    let mid = Math.floor((left + right) / 2);

    // if mid val > right val, the min value is in this range
    if (nums[mid] > nums[right]) {
        // So we might check the left portion first because it is sorted in order
        // If target is in this range, then recursively searching from left to mid
        if (nums[left] <= target && nums[mid] >= target) {
        return rotatedSearch(nums, target, left, mid)
        // Otherwise searching the right portion
        } else {
        return rotatedSearch(nums, target, mid, right)
        }
    // if mid val < right val, this right portion is sorted in order
    } else {
        // If target is in this range, then recursively searching from mid to right
        if (nums[mid] <= target && nums[right] >= target) {
        return rotatedSearch(nums, target, mid, right)
        } else {
        // Otherwise searching the left portion
        return rotatedSearch(nums, target, left, mid)
        }
        
    }
};

// 15. 3Sum
// Brute force will give O(n^3)
// Idea is, fix one value and convert the problem into TWO SUM problem
// Time -> O(n^2)
// Space -> O(n)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const ans = [], n = nums.length;
    
    // To handle duplicates, we need 2 things
    // 1. Sort the array -> O(nlogn)   
    nums.sort();
    // 2. Use a set to check duplicates 
    const set = new Set();
    
    for(let i=0; i<n; i++) {
        
        const map = new Map();
        
        for(let j=i+1; j<n; j++) {
            
            if (map.has(-nums[i]-nums[j]) && !set.has(`${[nums[i],-nums[i]-nums[j],nums[j]]}`)) {
                ans.push([nums[i],-nums[i]-nums[j],nums[j]]);
                set.add(`${[nums[i],-nums[i]-nums[j],nums[j]]}`);
            }
            
            map.set(nums[j]);
        }
    }
    
    return ans;
};

function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1
		
		// to summarize our setup, we have `i` that starts at the beginning,
		// `k` that starts at the end, and `j` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `j` and `k` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			// if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

				// this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};

// 11. Container With Most Water

var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};

// recursion

const maxArea = (height) => {
  const { length } = height;
  const getArea = (left, right) => Math.min(height[left], height[right]) * (right - left);
  const findMaxArea = (left, right, max) => {
    if (left === right) {
      return max;
    }
    if (height[left] > height[right]) {
      return findMaxArea(left, right - 1, Math.max(max, getArea(left, right - 1)));
    }
    return findMaxArea(left + 1, right, Math.max(max, getArea(left + 1, right)));
  };
  return findMaxArea(0, length - 1, getArea(0, length - 1));
};

// 70. Climbing Stairs

/*
DP

dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
*/
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};

/*
Recursion

climbStairs(n) returns the total number of different ways of taking n steps.
Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps

For more optimised solution, we use an Array to keep track of results that have already been computed
*/

var climbStairs = function(n, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
    // T.C: O(N)
    // S.C: O(N)
};

const mul = (
    [[a1, a2],[a3, a4]],
    [[b1, b2],[b3, b4]]) =>
    [[a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
     [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4]];

const matrix = [[0, 1],[1, 1]];

const id = [[1, 0],[0, 1]]

var climbStairs = function(n) {
    let result = id;
    const bits = (n + 1).toString(2);

    for(const bit of bits){
        result = mul(result, result);
        if(bit === "1"){
            result = mul(result, matrix);
        }
    }
    return result[1][0];
}

// 322. Coin Change
//  memoize
var coinChange = function(coins, amount) {
    const memo = new Map();
    
    function permute(left) {
        if(memo.has(left)) return memo.get(left)
        if(left === 0) return 0;
        let min = Infinity;
        
        for(let coin of coins) {
            if(left-coin >= 0) min = Math.min(min, permute(left-coin));
        }
        memo.set(left, min+1);
        return min + 1;
    }
    const result = permute(amount);
    return result === Infinity ? -1 : result;
};

// tabulation
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i < dp.length; i++) {
        for(let coin of coins) {
            if(i-coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// 300. Longest Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const binarySearchPosition = (dp, target, hi) => {
        let lo = 0;
        while (lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            if (target === dp[mid]) return mid;
            else if (target < dp[mid]) hi = mid-1;
            else lo = mid+1;
        }
        return lo;
    }
    
    if (nums === null || nums.length===0) return 0;
    if (nums.length === 1) return 1;
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    for (let i=0; i<nums.length; i++){
        let pos = binarySearchPosition(dp, nums[i], i);
        dp[pos] = nums[i];
    }

    for (let i = dp.length-1; i >= 0; i--){
        if (dp[i] !== Number.MAX_SAFE_INTEGER) return i+1;
    }
    
    return 0;
};

const lengthOfLIS = nums => {
  let sequence = Array(nums.length).fill(1);
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) sequence[i] = Math.max(sequence[i], sequence[j] + 1);
    }
  }
  return Math.max(...sequence)
}

var lengthOfLIS = function(nums) {
    // implementing solution 2
    let sub = [nums[0]]; 
    for(let i = 1; i< nums.length; i++){
        let currVal = nums[i]; 
		// important, this is from sub
        let prevVal = sub[i-1];
        if(currVal > prevVal){
            // meaning there is increasing
            // because prevVal is < currVal
            // push into subsequence array
            sub.push(currVal)
        } else {
            // currVal is smaller than previous
            // so this is not a continously increasing value
            // check from the beginning of our sub array
            let j = 0; 
            while(currVal > sub[j]){
                j++;
            }
            sub[j] = currVal;
        }
        
    }
    return sub.length
};

// 139. Word Break

// bfs

const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);

  // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
  // After 'cats' and 'ca', it will become 'andog', 'tsandog'
  // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
  const visited = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();

    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
};

// dp

const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;

  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end);
      if (dp[start] === true && set.has(w)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
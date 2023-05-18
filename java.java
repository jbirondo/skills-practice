// two-sum

Map hm = new HashMap();
    for(int i=0;i {
         hm.put(nums[i],i);
}
for(int i=0;i {
   int k =nums[i];
   if(k == target && hm.containsKey(0) )
  {
         arr[0]= i;
         arr[1]=hm.get(0);
         break;
  }
else if(hm.containsKey(target-k) )
{
   if(hm.get(target-k)>i)
     {      arr[0]= i;
             arr[1]=hm.get(target-k);
              break;} 
  }
}
   return arr;
}

class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
        return new int[] {};
    }
}

import java.util.HashMap;
import java.util.Map;
 
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numToIndex = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (numToIndex.containsKey(target - nums[i])) {
                return new int[] {numToIndex.get(target - nums[i]), i};
            }
            numToIndex.put(nums[i], i);
        }
        return new int[] {};
    }
}

// Best Time to Buy and Sell Stock

class Solution {
    public int maxProfit(int[] prices) {
        int lsf = Integer.MAX_VALUE;
        int op = 0;
        int pist = 0;
        
        for(int i = 0; i < prices.length; i++){
            if(prices[i] < lsf){
                lsf = prices[i];
            }
            pist = prices[i] - lsf;
            if(op < pist){
                op = pist;
            }
        }
        return op;
    }
}

// Approach2: Replacing the stack with a variable as we only to keep to least number we've encountered in past
 public int maxProfit(int[] prices) {
    int variable=(int)1e9;
    int ans=0;
    for(int i : prices){
        if(variable==(int)1e9)variable=i;
        else{
            if(i<variable)variable=i;
            else ans=Math.max(ans,i-variable);
        }
    }

    return ans;
}

// contains dup

// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Create a hashset...
        HashSet<Integer> hset = new HashSet<Integer>();
        // Traverse all the elements through the loop...
        for (int idx = 0; idx < nums.length; idx ++){
            // Searches hashset. if present, it contains duplicate...
            if (hset.contains(nums[idx])){
                return true;
            }
            // if not present it will update hashset...
            hset.add(nums[idx]);
        }
        // Otherwise return false...
        return false;
    }
}

// traverse through each element the param array
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Base case...
        if(nums==null || nums.length==0)
            return false;
        // Create a hashset...
        HashSet<Integer> hset = new HashSet<Integer>();
        // Traverse all the elements through the loop...
        for(int idx: nums){
            // If it contains duplicate...
            if(!hset.add(idx)){
                return true;
            }
        }
        // Otherwise return false...
        return false;
    }
}

//238. Product of Array Except Self

// brute force

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        
        for(int i = 0; i < n; i++) {
            int pro = 1;
            for(int j = 0; j < n; j++) {
                if(i == j) continue;
                pro *= nums[j];
            }
            ans[i] = pro;
        }
        
        return ans;
    }
}

// prefix product and suffix product

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int pre[] = new int[n];
        int suff[] = new int[n];
        pre[0] = 1;
        suff[n - 1] = 1;
        
        for(int i = 1; i < n; i++) {
            pre[i] = pre[i - 1] * nums[i - 1];
        }
        for(int i = n - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1];
        }
        
        int ans[] = new int[n];
        for(int i = 0; i < n; i++) {
            ans[i] = pre[i] * suff[i];
        }
        return ans;
    }
}

// directly storing final product of prefix and suffix

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        Arrays.fill(ans, 1);
        int curr = 1;
        for(int i = 0; i < n; i++) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        curr = 1;
        for(int i = n - 1; i >= 0; i--) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        return ans;
    }
}

// 53. Maximum Subarray

class Solution {
    public int maxSubArray(int[] nums) {
        // Initialize currMaxSum & take first element of array from which we start to do sum...
        int maxSum = nums[0];
        // Initialize the current sum of our subarray as nums[0]...
        int currSum = nums[0];
        // Traverse all the element through the loop...
        for (int i = 1; i < nums.length; i++) {
            // Do sum of elements contigous with curr sum...
            // Compare it with array element to get maximum result...
            currSum = Math.max(currSum + nums[i], nums[i]);
            // Compare current sum and max sum.
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;      // return the contiguous subarray which has the largest sum...
    }
}

class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        int max = Integer.MIN_VALUE, sum = 0;
        
        for(int i=0;i<n;i++){
            sum += nums[i];
            max = Math.max(sum,max);
            
            if(sum<0) sum = 0;
        }
        
        return max;
    }
}

// 153. Find Minimum in Rotated Sorted Array

public class Solution {
    public int findMin(int[] nums) {
        if (nums==null || nums.length==0) { return Integer.MIN_VALUE; } 
        int left = 0, right = nums.length-1;
        while (left < right-1) {  // while (left < right-1) is a useful technique
            int mid = left + (right-left)/2;
            if (nums[mid] > nums[right]) { left = mid; }
            else { right = mid; }
        }
        if (nums[left] > nums[right]) { return nums[right]; }
        return nums[left];
    }
}

// recursion

public int findMin(int[] nums) {
	return binSearch(nums, 0, nums.length - 1);
}
    
int binSearch(int nums[], int lo, int hi) {

	int mid = (lo + hi) / 2;

	if (nums[mid] > nums[hi]) {
		return binSearch(nums, mid + 1, hi);
	// check if mid > lo, so that nums[mid-1] doesn't go out of array bounds	
	} else if (mid > lo && nums[mid-1] < nums[mid]) {
		return binSearch(nums, lo, mid - 1);
	} else {
		return nums[mid];
	}
}

// 33. Search in Rotated Sorted Array

public int search(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid]))
            lo = mid + 1;
        else
            hi = mid;
    }
    return lo == hi && nums[lo] == target ? lo : -1;
}

class Solution {
    public int search(int[] nums, int target) {
        int low=0,high=nums.length-1;
        return binarySearch(nums,low,high,target);
    }
    public int binarySearch(int[] nums,int low,int high,int target){
        int mid=(low+high)/2,left=-1,right=-1;
        if(low<=high){
            if(nums[mid]==target)
                return mid;
            else{
                left=binarySearch(nums,low,mid-1,target);
                right=binarySearch(nums,mid+1,high,target);
            }
        }
        return Math.max(left,right);
    }
}

// 15. 3Sum

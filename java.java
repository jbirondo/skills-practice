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


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
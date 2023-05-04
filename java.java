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


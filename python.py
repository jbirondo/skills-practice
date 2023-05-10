# two-sum
# brute force
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if (i != j and nums[i] + nums[j] == target):
                    return [i, j]
        return []
    
# optimized with hash
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numToIndex = {}
        for i in range(len(nums)):
            if target - nums[i] in numToIndex:
                return [numToIndex[target - nums[i]], i]
            numToIndex[nums[i]] = i
        return []
    
# Best Time to Buy and Sell Stock

class Solution:
    def maxProfit(self,prices):
        left = 0 #Buy
        right = 1 #Sell
        max_profit = 0
        while right < len(prices):
            currentProfit = prices[right] - prices[left] #our current Profit
            if prices[left] < prices[right]:
                max_profit =max(currentProfit,max_profit)
            else:
                left = right
            right += 1
        return max_profit

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # ans=0
        # for i in range(len(prices)-1):
        #     for j in range(i+1,len(prices)):
        #         temp=prices[j]-prices[i]
        #         ans=max(ans,temp)
        # return ans
        ans=0
        i,j=0,1
        while j!=len(prices):
            temp=prices[j]-prices[i]
            if temp<0:
                i=j
            elif temp>0:
                ans=max(temp,ans)
            j+=1
        return ans
    
    # contains dup
    
    class Solution(object):
        def containsDuplicate(self, nums):
            """
            :type nums: List[int]
            :rtype: bool
            """
            hash = {}
            for x in nums:

                if x in hash:
                    return True
                hash[x] = 1
            return False
        
    # slow 
    def containsDuplicate(nums):
    	return len(set(nums)) != len(nums)
        
# 238. Product of Array Except Self

class Solution:
      def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left_product = [1] * n # initialize left_product array with 1
        right_product = [1] * n # initialize right_product array with 1
        # calculate the product of elements to the left of each element
        for i in range(1, n):
            left_product[i] = left_product[i - 1] * nums[i - 1]

        # calculate the product of elements to the right of each element
        for i in range(n - 2, -1, -1):
            right_product[i] = right_product[i + 1] * nums[i + 1]

        # calculate the product of all elements except nums[i]
        result = [left_product[i] * right_product[i] for i in range(n)]

        return result
    
# optimized

class Solution:
      def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [1] * n
        # calculate the product of elements to the left of each element and store in result
        for i in range(1, n):
            result[i] = result[i - 1] * nums[i - 1]

        # calculate the product of elements to the right of each element and update result
        right_product = 1
        for i in range(n - 1, -1, -1):
            result[i] *= right_product
            right_product *= nums[i]

        return result
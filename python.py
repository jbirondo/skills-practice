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
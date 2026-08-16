class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let currentIndex = 0;
        while (currentIndex < nums.length) {
            for(let i = 0; i < nums.length; i++) {
                if(nums[currentIndex] + nums[i] === target && i !== currentIndex) {
                    return [currentIndex, i];
                }
            }
            currentIndex++;
        }
        return [];    
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let low = 0;
        const size = nums.length;
        let high = size - 1;

        while(low <= high) {
            let mid = Math.floor((low + high) / 2);

            if(target === nums[mid]) return mid;
            else if(target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        }

        return -1;
    }
}

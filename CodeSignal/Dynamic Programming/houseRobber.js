//Input is a non-negative list of integers representing
//the amount money for each house.
//Find the maximum amount of money that can be robbed
//if adjacent houses cannot be robbed

function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length < 3) return Math.max(...nums);
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(
      nums[i - 1],
      nums[i - 3] + nums[i] || 0,
      nums[i] + nums[i - 2]
    );
  }
  return nums[nums.length - 1];
}

//Given a sorted integer array without duplicates,
//return a summary of the number ranges it contains
function composeRanges(nums) {
  let ranges = [];
  let i = 0;
  let j = 0;
  while (i < nums.length && j < nums.length) {
    if (nums[j + 1] - nums[j] === 1) j++;
    else {
      if (nums[j] !== nums[i]) ranges.push(`${nums[i]}->${nums[j]}`);
      else ranges.push(`${nums[i]}`);
      j++;
      i = j;
    }
  }
  return ranges;
}

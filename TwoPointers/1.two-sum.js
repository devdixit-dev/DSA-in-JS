const twoSum = (nums, target) => {
  const seen = {};
  // empty object used as a hash map
  // stores { number: index } pairs we loop

  for(let i = 0; i < nums.length; i++) {
    // Loop through every element in the array using index i

    const comp = target - nums[i];
    // Calculates what number we need to pair with the current number to reach the target.
    // Example: if target = 9 and nums[i] = 2, then complement = 7

    if(comp in seen) {
      return [seen[comp], i];
    }

    seen[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9));
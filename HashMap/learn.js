const map = {};

map["apple"] = 5;
map["banana"] = 3;

console.log(map["apple"]); // 5

console.log("apple" in map); // true
console.log("mango" in map); // false

delete map["banana"]; // delete "banana"
console.log(map);

// Hashmap - search, insert and delete
// Time complexity - O(1)

const nums = [1,2,2,3,3,3];
const freq = {};
const seen = {};

for(let num of nums) {
  freq[num] = (freq[num] || 0) + 1;
  console.log("freq[num]", freq[num]);
  // 1 1 2 1 2 3

  if(num in seen) {
    console.log(num + " is a duplicate!")
  }

  seen[num] = true;
}

console.log(freq);
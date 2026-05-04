const map = {};

map["apple"] = 5;
map["banana"] = 3;

console.log(map["apple"]); // 5

console.log("apple" in map); // true
console.log("mango" in map); // false

delete map["banana"]; // delete "banana"
console.log(map);
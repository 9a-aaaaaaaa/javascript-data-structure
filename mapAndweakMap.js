
// https://juejin.cn/post/6844904169417998349 你不知道的weakmap
// node --expose-gc mapAndweakMap.js


//map.js
function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}
  
global.gc();
console.log(usageSize()); // ≈ 3.19M

let arr = new Array(10 * 1024 * 1024);


// map 的大小是
// const map = new Map();
const map = new WeakMap();

map.set(arr, 1);

console.log('[ map ]-17', map)
global.gc();
console.log(usageSize()); // ≈ 83.19M

arr = null;
global.gc();
console.log(usageSize()); // ≈ 83.2M
  
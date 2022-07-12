/**
 * 集合： set 
    * 集合是一个无序的集合，其中的元素不可重复。
    weakSet: add delete has 只有三个方法，只能存贮对象的弱引用。不会被GC，即便是引用计数为0，也不会被回收。

    // eg: 
    const requests = new WeakSet();
    class ApiRequest {
        constructor() {
            requests.add(this);
        }
        makeRequest() {
            if(!request.has(this)) throw new Error("Invalid access");
            // do work
        }
    }

    遍历： forEach for-of 
 */
class MySet {
  constructor() {
    this.set = new Set();
  }

  add(value) {
    this.set.add(value);
  }

  has(value) {
    return this.set.has(value);
  }

  delete(value) {
    this.set.delete(value);
  }

  clear() {
    this.set.clear();
  }

  size() {
    return this.set.size;
  }

  values() {
    return this.set.values();
  }

  entries() {
    return this.set.entries();
  }

  forEach(callback) {
    this.set.forEach(callback);
  }

  toArray(){
    return Array.from(this.set);
  }

  // 并集
  union(setA,setB){
    return new MySet([...setA,...setB]);
  }

  // 交集 O(n^2) 单独遍历添加可以降低复杂度
  intersection(setA){
    return new MySet([...setA].filter(x=>this.has(x)));
  }

  // 差集
  difference(setA){
    return new MySet([...this.set].filter(x=>!setA.has(x)));
  }

  // 子集
  subset(setA){
     return this.size()>=setA.size() && [...setA].every(x=>this.has(x));
   }
}

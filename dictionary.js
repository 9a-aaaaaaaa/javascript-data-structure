/**
 * 字典结构：在js中字典结构可以理解为一个对象。
 * weakMap：https://zhuanlan.zhihu.com/p/84862214
 */
class MyMap {
    constructor() {
        this.map = new Dictionary();
    }

    set(key, value) {
        this.map.set(key, value);
    }

    get(key) {
        return this.map.get(key);
    }

    has(key) {
        return this.map.has(key);
    }

    delete(key) {
        this.map.delete(key);
    }

    clear() {
        this.map.clear();
    }

    size() {
        return this.map.size;
    }

    values() {
        return this.map.values();
    }

    entries() {
        return this.map.entries();
    }

    forEach(callback) {
        this.map.forEach(callback);
    }

    toArray(){
        return Array.from(this.map);
    }
}

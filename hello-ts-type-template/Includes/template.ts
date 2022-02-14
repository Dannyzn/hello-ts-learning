type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// type Includes1<T extends readonly any[], U> =  any;

type Includes<T extends readonly any[], U> = 
  T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false

// includes 的 -->  js 的实现
// es6 
let arr1 = [1,2,3,4,5]
let [first, ...rest] = arr1;

function includes(array, searchedValue) {
    return some(array, (value) => value === searchedValue)
}
// 我们可以去实现 some 函数

function some(array, callback) {

    let { length } = array;

    for (let index = 0; index < length; index++) {
        let value = array[index];

        // (value) => value === searchedValue => true
        if (callback(index, value, array)) {
            return true;
        }
    }
    return false;
}

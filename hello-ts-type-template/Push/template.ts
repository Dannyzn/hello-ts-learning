type Push<T extends unknown[], U> = T extends [] ? [U] : [...T, U]

// js
// push 实现的

// es6 [arr, ...target]
// 扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
// https://segmentfault.com/a/1190000020259974


// push 的 实现

function push(...item) {
    let O = Object(this);  // ecma 中提到的先转换为对象
    let len = this.length >>> 0;

    let argCount = item.length >>> 0;

    // 2 ^ 53 - 1 为JS能表示的最大正整数
    if (len + argCount > 2 ** 53 - 1 ) {
        throw new TypeError("The number of array is over the max value")
    }

    for (let i = 0; i < argCount; i++) {
        O[len + i] = item[i];
    }

    let newLength = len + argCount;
    O.length = newLength;

    return newLength;
}
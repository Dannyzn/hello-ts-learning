type Unshift<T extends unknown[], U> =  T extends [] ? [U] : [U, ...T];

// 开始是 T 是不是 属于我们定义的 这个数组类型
// 然后呢 我们去 判断一下 T 是不是 一个[] 就是直接把元素放进去 [U]
// 如果不是空数组就是需要把 要 U 放在数组的第一位 [U, ...T]


// js 中的 unshift 的实现

// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。

function unshift(array, ...values) {
    console.log(array, values)
    const mergeArray = [].concat(values, ...array);
    const { length: mergeLength } = mergeArray;

    for (let index = 0; index < mergeLength; index++) {
        let value = mergeArray[index];
        array[index] = value;
    }
    return array.length;
}

console.log(unshift([1,2,3], 4));
console.log(unshift([1,2,3,4], [5,5,6]));

// 这里的实现我认为有两个思考点：
// 1.  思考为啥把两个数组或者元素 合并
// 2.  思考 合理用array[index] 去存新的值 也可以 第一个index 定为插入的值的位置 依次向后插入原来的值 其实也是一个意思
// 3.  数组的特性 是 可以动态的扩展的

type Flatten = any


// es  flat 

// js  实现一个flat 数组的

function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
            result = result.concat(flatten(arr[i])) // error
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

// js 实现一个 对象的 flatten 

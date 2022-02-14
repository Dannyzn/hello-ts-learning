type Concat<T extends unknown[], U extends unknown[]> =  [...T, ...U]


// concat
// for (in/of) ---> []

// js的实现

function concat(array, ...values) {
    // 先把当前的数组存起来
    const result = [...array];
    // 拿到 length
    const { length } = values;

    // 在 result 后面依次追加  push
    for (let index = 0; index < length; index += 1) {
      const value = values[index];
      
      if (Array.isArray(value)) {
        result.push(result, ...value);
      } else {
        result.push(result, value);
      }
    }
  
    return result;
}
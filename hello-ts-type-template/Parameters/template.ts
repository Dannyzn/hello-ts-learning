type MyParameters<T extends (...args: any[]) => any> = T extends (...args:  infer P) => any ?  P : []

// 想这里的 整句的意思是: 输入的类型 T 满足于 (...args: any[]) => any 
// 然后就是 同样的思路 可以看一下下面的例子

// 参考资料地址: 
// https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D

// infer P 表示待推断的函数参数。

type ParamType<T> = T extends (...args: infer P) => any ? P : T;

// 这里的整句表示为 如果 T 能赋值给 (...args:  infer P) => any 
// 则 结果是:  (...args: infer P) => any 类型中的参数 P, 否则返回 T;

//function a(nums, ...args) {}

function a(nums, ...args) {}

type ReturnType1<T> = T extends (...args: any[]) => infer P ? P : any;

interface User {
    name: string;
    age: number;
  }
type Func = () => User;

type Test = ReturnType<Func>; // Test = User

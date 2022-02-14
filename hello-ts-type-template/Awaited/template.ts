type Helper<T> = T extends Promise<infer U> ? Helper<U> : T

type MyAwaited<T extends Promise<unknown>> =  T extends Promise<infer U> ? Helper<U> : never                      

// 1. 等于左侧的 T extends Promise<unknown> 先用来判断传入的是否是 Promise
// 2. 使用 infer 来获取 Promise 内的类型 
//    2.1 infer 表示在 extends 条件语句中待推断的类型变量。
//    2.2 https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D
// 3. 会有递归调用的情况 我们需要重写一个 Helper<T>


//  promise 
//  1. 判断是不是  promise instansOf Promise
//  2. 都会返回一个 新的 promise
//  3. 是返回 promise 的结果 
//  4. 需要整理一下 如何实现一个 Promise A+

// 参考
// https://github.com/type-challenges/type-challenges/issues/6446

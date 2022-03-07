
type ExtractType<T> = T extends Promise<infer R> ? R : T;

declare function PromiseAll<T extends any[]>(values: readonly[...T]): 
    Promise<{[P in keyof T]: ExtractType<T[P]>}> 


    // 需要 看输入的是不是 promises 数组 或者说 可迭代的对象
    // 返回值 是个promise 结果的数组

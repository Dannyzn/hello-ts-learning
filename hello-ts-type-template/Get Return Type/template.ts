// type MyReturnType<T> = T extends (args: any[]) => infer P ? P : never  

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never

// 暂时不是很懂
// 明天再来看一下
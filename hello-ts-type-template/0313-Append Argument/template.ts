type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never


// 如果是 js 添加后来的参数

let obj1 = {};
let arr1 = []

let obj = {
    ...obj1,
    arr1
}


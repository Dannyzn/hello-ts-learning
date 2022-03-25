type Merge<F, S> = {
    [Key in keyof F | keyof S]: Key extends keyof S ? S[Key] : Key extends keyof F ? F[Key] : never
}

// in 是否 属性在 F 或者 S 
// 就是 借助于 extends

// 不是很明白暂时
//  哈哈

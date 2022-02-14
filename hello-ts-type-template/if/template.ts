

type If<C, T, F> = C extends true ? T : F

// C extends boolean 限制了必须是 布尔类型, 
// Type 'null' does not satisfy the constraint 'boolean'
type If1<C extends boolean, T, F> = C extends true ? T : F;



//  是不是 类似于 三元表达式的参考呢？

// if 无非就是 true/false

//  C === true ?  "a" : "b"   ===>  "a"

//  C === false ? "a" :  "b"  ===>  "b"
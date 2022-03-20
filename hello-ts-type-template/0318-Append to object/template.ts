type AppendToObject<T extends Record<string, unknown>, U extends string, V extends unknown> = {
    [K in keyof T | U] : K extends U ? V : T[K]
}

// 不断的拆解问题

// T 
// type test1 = {
//     key: 'cat'
//     value: 'green'
// }

// U 
// "home"

// V
// value:  bealean,1, '123456'

// 
{
    key: 'value'
}

// key
// keyof
// 联合类型  T | U
// [K in keyof T | U]

// value
// K 是否是 U 返回 V ---->  key extends home ? bealean : test1[key]
// K extends U ? V : T[K]
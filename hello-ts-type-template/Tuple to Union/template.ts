type TupleToUnion<T extends any[]> = T[number]

type TupleToUnion1<T> = T extends (infer U)[] ? U : never

// 其实没有那么的明白

//  js的思路就是说 ['123', 123, false]

//  string  ``

// toString   arr.join('|')    ---->  '123|456|true'
// 数组方法不明确 哈哈哈


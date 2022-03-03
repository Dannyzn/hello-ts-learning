
// FIRST OF ARRAY
// Pop 类似的思路
type Last<T extends any[]> = T extends [...infer R, infer B] ?  B : never
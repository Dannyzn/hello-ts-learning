// type Length<T extends any> = T extends {length: number} ? T['length'] : never

type Length<T extends any> = T extends ArrayLike<any> ? T['length'] : never

type Length1<T extends readonly string[]> = T['length']



// 类似的思路
// js    array = ['tesla', 'model 3', 'model X', 'model Y']
//       array.length  array[array.length]
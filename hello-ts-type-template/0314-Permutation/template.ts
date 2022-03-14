type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : T

// 一层一层 慢慢的展开就好了
// 第一层开始  [T] 是否是一个空数组 

// 第二层就是 返回的后面元素 继续进行处理  T 是否是 U 的子集 (T 是 A, U = 'A|B|C')

//  返回的数组继续 下一个元素的处理 [T, ...(后面的元素不包括之前已经处理的过的元素 通过Exclude 处理)]

//  U 全集  ---->  T 慢慢的 就   A  
//  U = 'A|B|C'   ---->  T  A   我们需要的是 返回  B|C

//  IF   
type MyExclude2<T, U> = T extends U ? never : T
// 结果就成了   never

 
type MyExclude3<U, T> = U extends T ? never : U
// B | C

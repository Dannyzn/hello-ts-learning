type StringToUnion<T extends string> = T extends `${infer H}${infer R}` ? H | StringToUnion<R> : never

// 利用 模版字符串

// 将 字符串 分为  H 和 R 两部分,   [first, ...rest] 
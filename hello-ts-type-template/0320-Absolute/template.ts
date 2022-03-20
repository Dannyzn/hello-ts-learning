
type Absolute<T extends number | string | bigint> = 
   `${T}` extends `-${infer U}` ? U : `${T}`


// 核心解法是 把 T 变为字符串 然后检查字符串前面 是否有 '-' 我们就返回 之后的字符串, 否则转换为字符串的 T 
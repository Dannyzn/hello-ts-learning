// type Replace<S extends string, From extends string, To extends string> = anyz


// 所用知识：
// infer + 模板字面量类型
// Conditional Type
// 先判断From是不是空，再把To和From进行替换

type Replace<S extends string, From extends string, To extends string> = 
From extends '' ? S 
    : S extends `${infer First}${From}${infer Rest}`
    ? `${First}${To}${Rest}` : S
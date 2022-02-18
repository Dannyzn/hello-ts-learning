type MyExclude1<T, K> = T extends K ? never : T

type MyOmit<T, K> = {
    [P in MyExclude1<keyof T,  K>] : T[P]
}

// keyof T  表示类型T 的 所有公共属性的字面量的联合类型

// 先用 MyExclude1<T, K> 展开 然后返回结果是 包含在其中的联合类型 就会返回 never
// [P in result] : T[P]  ---->  得到的结果就是 包含的 联合类型中属性将会被剔除 
// [P in title] : T[title]  ----> Expected2 的结果

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}
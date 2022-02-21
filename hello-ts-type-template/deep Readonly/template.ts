type DeepReadonly<T> = {
    readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
    // key: value
}

//  keyof T[P] extends never  
//  keyof 展开之后呢, extends 判断(if) 是否是不包含子项的 ？ 返回本身的 value : 递归子项

// key: value

Object.keys()

Object.values() 

//  遍历每一项 是不是有 
typeof item === "object"

// 继续 递归调用
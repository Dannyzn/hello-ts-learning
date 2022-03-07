type LookUp<U, T> = U extends { type: T } ? U : never

// 
let a = {
    type : 'a'
}

a['type'] === 'a' ? a : undefined 
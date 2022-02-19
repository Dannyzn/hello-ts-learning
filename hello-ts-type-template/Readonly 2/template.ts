type Diff<A, B> = A extends B ? never : A

type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [S in K]  : T[S]
} & {
    [ S in Diff<keyof T, K>] : T[S]
}

// 满足单个范型
type MyReadonly22<T> = {
    readonly [P in keyof T]: T[P]
}

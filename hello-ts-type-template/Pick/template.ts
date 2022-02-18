type Includes11<T, K> = T extends K ? T : never

type MyPick<T, K> = {
    [P in Includes11<keyof T, K>]: T[P];
}

// 可以结合 omit 的 例子反过来想就明白了
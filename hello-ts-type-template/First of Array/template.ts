
type First<T extends any[]> = T extends [infer R, ...infer Rest] ? R : never
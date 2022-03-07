
type ExtractType<T> = T extends Promise<infer R> ? R : T;

declare function PromiseAll<T extends any[]>(values: readonly[...T]): 
    Promise<{[P in keyof T]: ExtractType<T[P]>}> 
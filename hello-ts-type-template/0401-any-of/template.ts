type Falsy = 0 | "" | false | [] | {[key: string]: never}
   
type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest]
    ? F extends Falsy ? AnyOf<Rest> : true
    : false
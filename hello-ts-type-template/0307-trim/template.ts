

type Trim<S extends string> = S extends (`${ " " | '\t' | '\n'}${infer Rest}` | `${infer Rest}${ " " | '\t' | '\n'}`) ? Trim<Rest> : S
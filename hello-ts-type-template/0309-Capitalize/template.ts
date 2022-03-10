
type MyCapitalize<S extends string> = S extends `${infer U}${infer R}` ? `${Uppercase<U>}${R}` : S

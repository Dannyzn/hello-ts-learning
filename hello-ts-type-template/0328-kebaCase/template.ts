type LowerKebab<S> = S extends `${infer U}${infer R}`
    ?  U extends LowerKebab<U>
       ? `${U}${LowerKebab<R>}`
       : `-${LowerKebab<U>}${LowerKebab<R>}`
    : S;


type KebabCase<S> = S extends '-'
    ? S
    : LowerKebab<S> extends `-${infer R}`
        ? `${R}`
        : LowerKebab<S>
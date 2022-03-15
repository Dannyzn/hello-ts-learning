type LengthOfString<S extends string, T extends string[] = []
> = S extends `${infer F}${infer R}`
    ? LengthOfString<R, [...T, F]>
    : T['length']


// type cases = [
//     Expect<Equal<LengthOfString<''>, 0>>,
//     Expect<Equal<LengthOfString<'kumiko'>, 6>>,
//     Expect<Equal<LengthOfString<'reina'>, 5>>,
//     Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
// ]
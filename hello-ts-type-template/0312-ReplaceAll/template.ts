type ReplaceAll<S extends string, From extends string, To extends string> = 
    From extends '' ? S
        :  S extends `${infer First}${From}${infer Rest}`
        // S  是否是满足于 当前的 字符串
        ?  `${First}${To}${ReplaceAll<Rest, From, To>}` : S
        // 最后返回的时候  后面的字串的部分 是否是可以继续被替换的条件的情况
        // 其实就是 递归的思路了

// type Replace<S extends string, From extends string, To extends string> = 
// From extends '' ? S 
//     : S extends `${infer First}${From}${infer Rest}`
//     ? `${First}${To}${Rest}` : S

// type ReplaceAll1<S extends string, From extends string, To extends string> = 
//      From extends '' ? S 
//      : S extends `${infer First}${From}${infer Rest}` 
//      ? `${First}${To}${ReplaceAll<Rest, From, To>}` : S


// type cases = [
// Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
// Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
// Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
// Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
// Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
// Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
// Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
// Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
// Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
// ]
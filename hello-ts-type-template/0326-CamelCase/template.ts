
// 开始抄作业了
type CamelCase<S extends string, Val extends string = ''> = S extends `${infer L}-${infer R}`
    ? R extends `${infer F}${string}`
        ? F extends Capitalize<F>
            ? CamelCase<R, `${Val}${L}-`>
            : CamelCase<Capitalize<R>, `${Val}${L}`>
        : `${Val}${S}`
    : `${Val}${S}`

// 似乎是抄完了 还不懂呢

// import { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
//   Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
//   Expect<Equal<CamelCase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
//   Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
//   Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
//   Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
//   Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
//   Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
//   Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
//   Expect<Equal<CamelCase<'-'>, '-'>>,
//   Expect<Equal<CamelCase<''>, ''>>,
//   Expect<Equal<CamelCase<'😎'>, '😎'>>,
// ]
import { Equal, Expect } from '@type-challenges/utils'



type Replace<S extends string, From extends string, To extends string> = 
From extends '' ? S 
    : S extends `${infer First}${From}${infer Rest}`
    //   foobarbar  extends foo bar bar 
    ? `${First}${To}${Rest}` : S
    //  foo foo bar 


type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]
import { Equal, Expect } from '@type-challenges/utils'

type Merge<F, S> = {
    [Key in keyof F | keyof S]: Key extends keyof S ? S[Key] : Key extends keyof F ? F[Key] : never
}

// in 是否 属性在 F 或者 S 
// 就是 借助于 extends

// 不是很明白暂时
//  哈哈 因为是后面的属性 优先嘛？

// 所以就是说 要 F|S  我们先去处理  S 中属性再去处理  F 中剩余的属性的值

type Foo = {
    a: number;
    b: string;
  };
type Bar = {
    b: number;
    c: boolean;
};
  
  type cases = [
    Expect<Equal<Merge<Foo, Bar>, {
      a: number;
      b: number;
      c: boolean;
    }>>
  ]
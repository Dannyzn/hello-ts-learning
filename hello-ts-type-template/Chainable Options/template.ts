
type Chainable<T = {}> = {
  // option<K extends string, V>(key: K, value: V): Chainable<T & { K : V }>
  option<K extends string, V>(key: K, value: V): Chainable<T & { [key in K] : V }>
  get(): T
}


// 可串联的构造器
// 1  // K will be counted as a static property key, to make it dynamic
//   我们需要的是一个动态可以变化的 key 而不是一个 静态的不变的 key
const result123: {
  K: number;
} & {
  K: {
      value: string;
  };
} & {
  K: string;
}

// 2
// Chainable<T & { [key in K] : V }
// 合并类型  多个类型合并为 一个类型
// 因为我们 接受了 多个类型  但是在返回的时候 是需要返回一个类型的

const result124: {
  foo: number;
} & {
  bar: {
      value: string;
  };
} & {
  name: string;
}

// end --- result
type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}



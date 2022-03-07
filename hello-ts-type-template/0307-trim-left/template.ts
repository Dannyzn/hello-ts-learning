type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest}` ?  TrimLeft<Rest> : S

// trim left
// trim polyfill

// (function(w) {
//     var String =w.String, Proto = String.prototype;

//     (function(o,p) {
//         if (p in o ? o[p] ? false : true : true) {
//             var r = /^\s+/;
//             o[p] = o.trimLeft || function() {
//                 return this.replace(r, "")
//             }
//         }
//     })(Proto, 'trimStart')
// })(window)

// 1. Template Literal Types  利用模板字面量类型
// 2. 递归思路: 
//   还有空格或者\t \n 转义字符，则继续调用 TrimLeft<Rest> 直到conditional type 被判断为false为止，输出 S
// 3. 待推断的类型 
//    取出剩余的 rest 字符串


//  装饰器
//  目前装饰器本质上还是一个 函数, @expression 的形式其实是一个语法糖, expression 求值之后必须也是一个函数
//  它会在运行时被调用 被装饰的声明信息 作为参数传入

// js 中的 class 也是一个语法糖

class Person{
    say() {
        console.log('hello')
    }
}

// 实际上是相当于 
function Person() {}
Object.defineProperty(Person.prototype, 'say', {
    value: function() { console.log('hello')},
    enumerable: false,
    configurable: true,
    writable: true,
})

// 类装饰器
function addAge(constructor: Function) {
    constructor.prototype.age = 19;
}

@addAge





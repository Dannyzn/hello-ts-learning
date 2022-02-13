type MyExclude<T, U> = T extends U ? never : T 

// 条件类型

// T extends U ? X : Y

   
type Pop<T extends any[]> = T extends [...infer R, infer B] ? R : never 
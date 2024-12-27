/**
 * 제네릭
 */
function func<T>(value: T): T {
  return value;
}

let num = func(10); // let num: number
let bool = func(true); // let num: boolean
let str = func("string"); // let num: string
let arr = func([1, 2, 3]); // let arr: number[
let tuple1 = func([1, 2, 3] as [number, number, number]); // let tuple1: [number, number, number]
let tuple2 = func<[number, number, number]>([1, 2, 3]); // let tuple2: [number, number, number]

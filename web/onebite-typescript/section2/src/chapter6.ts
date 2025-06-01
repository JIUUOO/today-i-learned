// any
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;

let num: number = 10;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}

console.log(num);

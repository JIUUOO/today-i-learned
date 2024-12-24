/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // down casting 불가
  // let num: number = unknownVar; // unknown -> number; down casting
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // down casting 불가
  // let never1: never = 10; // number -> never; down casing
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}
/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // down casting 가능
  anyVar = unknownVar; // unknown -> any; down casting 당하기
  undefinedVar = anyVar; // any -> undefined; down casting 하기
  // neverVar = anyVar; // never 타입은 공집합
}

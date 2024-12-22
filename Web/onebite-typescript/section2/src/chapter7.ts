// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의이하는 타입

function func1(): string {
  return "hello";
}

function func2(): null {
  console.log("hello");
  return null;
}

func2();

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// let a: never;
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// let anyVar: any;
// a = anyVar;

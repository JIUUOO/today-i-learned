/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "민지우";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 * why? 교집합이 일부분이라도 있기 때문
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // 교집합이 공집합인 타입
let num3 = 10 as unknown as string; // unknown을 string으로 단언

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "민지우",
};

const len: number = post.author!.length;

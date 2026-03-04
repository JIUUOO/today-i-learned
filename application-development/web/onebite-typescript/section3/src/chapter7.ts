/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  value; // number | string으로 추론됨

  if (typeof value === "number") {
    // 타입 가드
    console.log(value.toFixed()); // number로 추론됨 <- 타입 좁히기
  } else if (typeof value === "string") {
    // 타입 가드
    console.log(value.toUpperCase()); // string으로 추론됨 <- 타입 좁히기
    // } else if (typeof value === "object") {
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "name" in value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

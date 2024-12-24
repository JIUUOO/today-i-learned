/**
 * 타입 추론
 */

let a = 10;
let c = {
  id: 1,
  name: "민지우",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://jiuuoo/com"],
};
let { id, name, profile } = c;

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10; // const num: 10
const str = "hello"; // const str: string

let arr = [1, "string"]; // let arr: (string | number)[]

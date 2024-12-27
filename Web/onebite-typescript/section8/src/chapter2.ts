/**
 * keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "민지우",
  age: 23,
};

getPropertyKey(person, "name");

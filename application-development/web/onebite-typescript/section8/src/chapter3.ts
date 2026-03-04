/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): User {
  return {
    id: 1,
    name: "민지우",
    age: 23,
  };
}

function updateUser(user: PartialUser) {}

updateUser({
  id: 1,
  name: "민지우",
  age: 23,
});

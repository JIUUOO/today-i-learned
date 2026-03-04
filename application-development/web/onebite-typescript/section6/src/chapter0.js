let studentA = {
  name: "민지우",
  grade: "A+",
  age: 23,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("인녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

let studentB = new Student("민지우", "A+", 23);
let studentC = new StudentDeveloper("민지우", "A+", 23, "TypeScript");
studentC.programming();

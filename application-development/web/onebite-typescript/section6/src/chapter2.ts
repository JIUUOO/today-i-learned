/**
 * 접근 제어자
 * access modifier
 */

class Employee {
  constructor(
    protected name: string,
    private age: number,
    public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    this.name;
  }
}

const employee = new Employee("민지우", 23, "developer");

// employee.name = "홀길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Jail bhai", 2);

//inheritance

class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name: ${this.name} and Age:${this.age}`);
  }
}
class Person2 extends Person1 {
  salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  show() {
    console.log(`Name: ${this.name} and Age:${this.age}`);
  }
}

const p3 = new Person2("emon", 22, 25000000);

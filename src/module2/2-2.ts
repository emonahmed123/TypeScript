{
  //

  //interface

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user45: UserWithRole1 = {
    name: "emon",
    age: 110,
    role: "admin",
  };

  interface User44 {
    name: string;
    age: number;
  }

  interface Roll2 {
    [index: number]: number;
  }

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num: number): number;
  }

  const rollNumber: Roll2 = [1, 2, 3, 4, 5];
  //
}

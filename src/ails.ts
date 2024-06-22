type CurshType = {
  name: string;
  age: number;
  profession?: string;
};

const crush: {
  name: string;
  age: number;
  profession?: string; //optional type
} = {
  name: "Moina Paki",
  age: 22,
  profession: "webdev",
};
const crush2: CurshType = {
  name: "Moina Paki",
  age: 22,
  profession: "webdev",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;
type OperationType = (x: number, y: number) => number;

const Calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

console.log(Calculate(10, 20, (x, y) => x + y));
console.log(Calculate(10, 20, (x, y) => x - y));

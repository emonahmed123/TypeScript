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

// let emon = ["emon", "smon", "bmon"];

/**
 * The function `reverStr` in TypeScript reverses a given string.
 * @param {string} str - "emon"
 * @returns The `reverStr` function is returning the reversed version of the input string "emon", so
 * the output would be "nome".
 */
// const reverStr = (str: string): string => {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
//   }
//   return newStr;
// };

// console.log(reverStr("emon"));
// let emon = "emon";
// const bal = emon.split("").reverse().join("");

// console.log(bal);

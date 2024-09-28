// spread operator

const herArii: string[] = ["emon", "sumon", "sakib", "sabbir"];
const hisArii: string[] = ["sabbir", "sakib", "sumon", "emon"];

const allArii: string[] = [...herArii, ...hisArii];

// console.log(allArii);

const newFun2 = (...num: number[]): number => {
  let sum: number = 0;
  num.map((n) => {
    sum = n + n;
  });
  return sum;
};

console.log(newFun2(1, 1, 2, 5));

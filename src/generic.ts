type myArray<T> = Array<T>;

const myNumbers: myArray<number> = [1, 2, 3, 4, 5, 5, 6];

const myStrings: myArray<string> = ["emon"];

type Oje = {
  name: string;
  age: number;
};

const ourInfo: myArray<Oje> = [
  {
    name: "emon",
    age: 22,
  },
  {
    name: "emon",
    age: 22,
  },
];

// tuple in generic

type myGentType<X, Y> = [X, Y];

const A: myGentType<string, number> = ["emon", 2];

//  generic  in function

const addPrinInfo = <P, Q>(param1: P, param2: Q): P => {
  console.log(`djlkfsd`, 33);
  return param1;
};

addPrinInfo<string, number>("dd", 33);

// generic in interface

interface Ime<T> {
  name: string;
  age: T;
}

const me: Ime<number> = {
  name: "string",
  age: 22,
};

type MovieType = {
  name: string;
  duration: number;
  category: string;
};

type myMovie = keyof MovieType;

const mytest: myMovie = "name";

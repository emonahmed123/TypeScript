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

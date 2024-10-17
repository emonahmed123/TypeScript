type TypeA = boolean;

// type TypeB = TypeA extends boolean ? boolean : null;

type TypeC = string;

type TypeD = number;

type TypeDE = TypeA extends boolean
  ? boolean
  : TypeC extends string
  ? string
  : TypeD extends number
  ? number
  : null;

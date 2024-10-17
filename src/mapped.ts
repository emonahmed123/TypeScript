// const myLuckyNums = [1, 2, 3, 4];

// const myLuckyString = myLuckyNums.map((num) => num.toString());

type listOfFriend = {
  friend1: string;
  friend2: string;
  friend3: string;
};
type listOfFriendReadOnly = {
  readonly [key in keyof listOfFriend]: listOfFriend[key];
};

const friendList: listOfFriendReadOnly = {
  friend1: "emon",
  friend2: "s",
  friend3: "emon",
};

// friendList.friend1 = "sumon";

console.log(friendList);

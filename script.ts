// // const fetchData = (): any => {
// //   console.log("fetchingData is fixed....");
// // };

// // fetchData();

// const number: number = 10;
// const string: string = "I love ma ma";
// const boolean: boolean = true;
interface User {
  name: string;
  email: string;
  age: number;
}

interface papi {
  num1: number;
  num2?: number;
  users: User[];
  fetchData: (url: string) => void;
}
const caculate = ({ num1, num2, users, fetchData }: papi): number => {
  if (num2) {
    return num1 * num2;
  } else {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
    }
    fetchData("I love nyi ");
    return num1;
  }
};
console.log(
  caculate({
    num1: 10,
    users: [
      { name: "Myat Phone Paing", age: 20, email: "paipai@gmail.com" },
      { name: "Papi", age: 21, email: "papi@gmail.com" },
      { name: "paing", age: 32, email: "paing@gmail.com" },
    ],
    fetchData(url) {
      console.log(url);
    },
  })
);

// Type Inference
// Understanding type inference
// Type Annotation

// 1. Type Inference :- when we don't explicitly give the data type while creating the datatype so typescript automatically detect the data type of that perticular variable value that's called  "Type Inference" in typescript.
// example :-
let a = 44;

// 2. Type Annotation :- when we explicitly give the data type while creating the datatype it is called as the "Type Annotation" in typescript.
// example :-
let b: number = 45;

//Interfaces and type aliases
// -> defining interfaces
// -> Using interfaces to define object shapes
// -> Extending interfaces
// -> type aliases
// -> intersection types

// --> 1. Defining Interfaces
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // the question mark just after the variable says that the particular variable is optional.
}

// --> 2. Using interfaces to define object shapes
const obj: User = {
  name: "Vitthal Ganesh Shivane",
  email: "vitthalganeshshivane@gmail.com",
  password: "vitthal@1234",
};

// --> 3. Extending Interfaces
// extending means if interface b extends interface a then b interface will have all the properties and fields which a already have
interface User1 {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

interface Admin extends User1 {
  admin: boolean;
}

// automatic merging of interfaces :- basically in typescript if we define two interfaces with the same name then they merge automatically by meringin their properties
interface Abcd {
  name: string;
}

interface Abcd {
  email: string;
}

const obj1: Abcd = {
  name: "vitthal ganesh shivane",
  email: "vitthalgs1434@gmail.com",
};

function abcd(obj1: Abcd) {
  console.log(obj1.email);
  console.log(obj1.name);
}

// Fundamental of type Aliases
// Type Aliases
// --> A type alias is a way to give a name to any type so you can reuse it easily.
// --> Think of it like creating your own custom label for a type.

// example no. 1
type sankhya = number;
let num: sankhya = 45;

// example no. 2
type UserName = string;
let myname: UserName = "Vitthal";

// example no. 3
type value = string | number | null;
let x: value = 10;

// Union and intersection types

// interfaces
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string; //optional when write ? after variable
// }

// function getDataOfUser(obj: User) {
//   console.log(obj.name);
//   console.log(obj.email);
//   console.log(obj.password);
//   if (obj.gender) {
//     console.log(obj.gender);
//   }
// }

// getDataOfUser({
//   name: "pankaj",
//   email: "pankaj@gmail.com",
//   password: "password",
// });

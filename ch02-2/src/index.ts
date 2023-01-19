import IPerson from "./person/Person";
// import Person from "./person/Person";
import Chance from "chance";
import * as R from "ramda";

// const chance = new Chance();
// let persons: IPerson[] = R.range(0, 2).map(
//   (n: number) => new Person(chance.name(), chance.age())
// );

// const testMakePerson = (): void => {
//   let jane: IPerson = makePerson("jane");
//   let jack: IPerson = new Person("jack");
//   console.log(jane, jack);
// };

// testMakePerson();

export const init = (callback: () => void): void => {
  console.log("default");
  callback();
  console.log("all");
};

init(() => console.log("custom"));

const calc = (value: number, cb: (number) => void): void => {
  let add = (a, b) => a + b;

  function multiply(a, b) {
    return a * b;
  }
  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`${result}`));

type Person = { name: string; age: number };

const makePerson = (name: string, age: number = 10): Person => {
  const person = { name, age };
  return person;
};

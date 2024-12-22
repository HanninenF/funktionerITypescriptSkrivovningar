import { allowedHobbies } from "./data";

export type Animal = {
  name: string;
  weight: number;
};

export type Person = {
  name: string;
  age: number;
  hobbies?: Hobby[];
};

export type Hobby = (typeof allowedHobbies)[number];

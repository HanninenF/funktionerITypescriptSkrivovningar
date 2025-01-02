import {
  allowedHobbies,
  allowedOccupations,
  allowedCategories,
  allowedAuthors,
  allowedVehicleTypes,
  stringType,
  allowedEngines,
} from "./data";

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

export type Vehicle = {
  brand: string;
  color: string;
  weight: number;
  wheels: number;
  description: string;
};

export type Car = Vehicle & {
  engine: string;
  seats: number;
  doors: number;
};

export type Bike = Vehicle & {
  type: "road" | "mountain" | "hybrid" | "electric";
  hasBasket: boolean;
  hasBell: boolean;
  hasLights: boolean;
};

export type Hero = {
  name: string;
  Occupation: AllowedOccupation;
  level: number;
};

export type BlogPost = {
  title: string;
  body: string;
  date: string;
  author: AllowedAuthors;
  category: AllowedCategories;
};

export type threeNumberObject = {
  x: number;
  y: number;
  z: number;
};

export type AllowedOccupation = (typeof allowedOccupations)[number];
export type AllowedCategories = (typeof allowedCategories)[number];
export type AllowedAuthors = (typeof allowedAuthors)[number];
export type allowedVehicleTypes = (typeof allowedVehicleTypes)[number];
export type AllowedStrings = (typeof stringType)[number];
export type AllowedEngines = (typeof allowedEngines)[number];

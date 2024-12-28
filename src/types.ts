import { allowedHobbies, allowedOccupations } from "./data";

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

export type AllowedOccupation = (typeof allowedOccupations)[number];

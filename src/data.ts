import { Person, Animal, Car, Bike, Hero, BlogPost } from "./types";

export const numbers = [
  40886,
  40886, // 2 gånger
  40620,
  40620, // 2 gånger
  313,
  313,
  313, // 3 gånger
  5779,
  5779,
  5779,
  5779, // 4 gånger
  7141,
  7141, // 2 gånger
  18628,
  18628, // 2 gånger
  18427,
  18427,
  18427, // 3 gånger
  20600,
  20600,
  20600,
  20600, // 4 gånger
  18309,
  18309, // 2 gånger
  33198,
  33198,
  33198, // 3 gånger
  22465,
  22465,
  22465,
  22465, // 4 gånger
  19296,
  19296, // 2 gånger
  25177,
  25177, // 2 gånger
  622,
  622,
  622, // 3 gånger
  9272,
  9272,
  9272,
  9272,
  9272, // 5 gånger
];

export const stringType = [
  "Hello",
  "World!",
  "JavaScript",
  "is",
  "awesome",
  "I love coding",
  "short",
  "longer string here that says absolutely nothing",
  "example",
  "of",
  "different",
  "lengths",
  "arrays are great",
  "and fun",
  "JavaScript arrays",
] as const;

export const strings = [
  "Hello",
  "Hello", // 2 gånger
  "World!",
  "World!", // 2 gånger
  "JavaScript",
  "JavaScript",
  "JavaScript", // 3 gånger
  "another hour",
  "awesome",
  "awesome",
  "awesome",
  "awesome",
  "awesome", // 5 gånger
  "I love coding",
  "I love coding", // 2 gånger
  "short",
  "short", // 2 gånger
  "longer string here that says absolutely nothing",
  "longer string here that says absolutely nothing", // 2 gånger
  "example",
  "example",
  "example",
  "example", // 4 gånger
  "of",
  "of",
  "of", // 3 gånger
  "different",
  "different",
  "different", // 3 gånger
  "lengths",
  "lengths",
  "lengths", // 3 gånger
  "arrays are great",
  "arrays are great", // 2 gånger
  "and fun",
  "and fun", // 2 gånger
  "JavaScript arrays",
  "JavaScript arrays",
  "JavaScript arrays", // 3 gånger
  "best of the best",
  "best of the best", // 2 gånger
  "don't bother me",
  "don't bother me", // 2 gånger
  "alrighty",
  "alrighty", // 2 gånger
  "doddle of birds",
  "doddle of birds", // 2 gånger
];

export const strings2 = [
  "Hello",
  "Hello", // 2 gånger
  "World!",
  "World!", // 2 gånger
  "JavaScript",
  "starlight",
  "JavaScript",
  "JavaScript", // 3 gånger
  "awesome",
  "awesome",
  "awesome",
  "awesome",
  "awesome", // 5 gånger
  "I love coding",
  "I love coding", // 2 gånger
  "short",
  "short", // 2 gånger
  "longer string here that says absolutely nothing",
  "longer string here that says absolutely nothing", // 2 gånger
  "example",
  "example",
  "example",
  "example", // 4 gånger
  "of",
  "of",
  "of", // 3 gånger
  "different",
  "different",
  "different", // 3 gånger
  "lengths",
  "lengths",
  "lengths", // 3 gånger
  "arrays are great",
  "arrays are great", // 2 gånger
  "and fun",
  "and fun", // 2 gånger
  "JavaScript arrays",
  "JavaScript arrays",
  "JavaScript arrays", // 3 gånger
  "best of the best",
  "best of the best", // 2 gånger
  "don't bother me",
  "don't bother me", // 2 gånger
  "alrighty",
  "alrighty", // 2 gånger
  "doddle of birds",
  "doddle of birds", // 2 gånger
];

export const people: Person[] = [
  { name: "Janne", age: 17, hobbies: ["skateboarding", "gaming"] },
  { name: "Jolin", age: 18 },
  { name: "Moa", age: 19, hobbies: ["reading", "swimming"] },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30, hobbies: ["hiking", "cooking"] },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 28 },
  { name: "Elliot", age: 40, hobbies: ["cycling", "photography"] },
  { name: "Fiona", age: 22 },
  { name: "George", age: 31, hobbies: ["gardening", "painting"] },
  { name: "Hannah", age: 29 },
  { name: "Ian", age: 33, hobbies: ["traveling", "fitness"] },
  { name: "Julia", age: 24 },
  { name: "Kevin", age: 27, hobbies: ["gaming", "writing"] },
  { name: "Laura", age: 32 },
  { name: "Michael", age: 45 },
  { name: "Nina", age: 26 },
  { name: "Oscar", age: 36 },
  { name: "Paula", age: 34, hobbies: ["yoga", "sculpting"] },
  { name: "Quentin", age: 38 },
  { name: "Rebecca", age: 23, hobbies: ["volunteering", "dancing"] },
  { name: "Simon", age: 37 },
  { name: "Tina", age: 41, hobbies: ["reading", "birdwatching", "cycling"] },
  { name: "Uma", age: 30 },
  { name: "Victor", age: 29 },
  { name: "Wendy", age: 25, hobbies: ["running", "knitting"] },
  { name: "Xander", age: 28 },
  { name: "Yasmine", age: 33 },
  { name: "Zach", age: 35, hobbies: ["fishing", "camping", "sewing"] },
  { name: "Angela", age: 42 },
  { name: "Brian", age: 27 },
  { name: "Catherine", age: 40 },
  { name: "David", age: 39, hobbies: ["woodworking", "coding"] },
  { name: "Evelyn", age: 31 },
  { name: "Frank", age: 34 },
  { name: "Grace", age: 26 },
  { name: "Henry", age: 37 },
  { name: "Isabelle", age: 28, hobbies: ["sewing", "drawing"] },
  { name: "Jack", age: 32 },
  { name: "Karen", age: 24 },
  { name: "Liam", age: 35 },
  { name: "Megan", age: 33 },
  { name: "Nathan", age: 29, hobbies: ["reading", "chess"] },
  { name: "Olivia", age: 30 },
  { name: "Patrick", age: 36 },
  { name: "Sophia", age: 27, hobbies: ["surfing", "meditation"] },
];

export const animals: Animal[] = [
  { name: "Elephant", weight: 5400 },
  { name: "Tiger", weight: 310 },
  { name: "Kangaroo", weight: 85 },
  { name: "Penguin", weight: 27 },
  { name: "Eagle", weight: 6.5 },
  { name: "Cheetah", weight: 72 },
  { name: "Dolphin", weight: 300 },
  { name: "Giraffe", weight: 800 },
  { name: "Panda", weight: 100 },
  { name: "Wolf", weight: 45 },
];

export const allowedHobbies = [
  "skateboarding",
  "gaming",
  "reading",
  "swimming",
  "hiking",
  "cooking",
  "cycling",
  "photography",
  "gardening",
  "painting",
  "traveling",
  "fitness",
  "gaming",
  "writing",
  "yoga",
  "sculpting",
  "volunteering",
  "dancing",
  "reading",
  "birdwatching",
  "running",
  "knitting",
  "fishing",
  "camping",
  "woodworking",
  "coding",
  "sewing",
  "drawing",
  "reading",
  "chess",
  "surfing",
  "meditation",
] as const;

export const vehicles: (Car | Bike)[] = [
  {
    brand: "Tesla",
    color: "Red",
    weight: 2000,
    wheels: 4,
    engine: "Electric",
    seats: 5,
    doors: 4,
    description: "",
  },
  {
    brand: "Volvo",
    color: "Black",
    weight: 1800,
    wheels: 4,
    engine: "Diesel",
    seats: 7,
    doors: 5,
    description: "",
  },
  {
    brand: "Giant",
    color: "Blue",
    weight: 12,
    wheels: 2,
    type: "mountain",
    hasBasket: false,
    hasBell: true,
    hasLights: true,
    description: "",
  },
  {
    brand: "Specialized",
    color: "Green",
    weight: 10,
    wheels: 2,
    type: "road",
    hasBasket: false,
    hasBell: false,
    hasLights: true,
    description: "",
  },
  {
    brand: "Canyon",
    color: "Yellow",
    weight: 15,
    wheels: 2,
    type: "electric",
    hasBasket: true,
    hasBell: true,
    hasLights: true,
    description: "",
  },
  // Additional vehicles
  {
    brand: "Ford",
    color: "Black",
    weight: 1900,
    wheels: 4,
    engine: "Gasoline",
    seats: 5,
    doors: 4,
    description: "",
  },
  {
    brand: "Chevrolet",
    color: "Red",
    weight: 2100,
    wheels: 4,
    engine: "Diesel",
    seats: 8,
    doors: 5,
    description: "",
  },
  {
    brand: "Yamaha",
    color: "Blue",
    weight: 11,
    wheels: 2,
    type: "road",
    hasBasket: false,
    hasBell: true,
    hasLights: false,
    description: "",
  },
  {
    brand: "Trek",
    color: "Green",
    weight: 13,
    wheels: 2,
    type: "hybrid",
    hasBasket: true,
    hasBell: false,
    hasLights: true,
    description: "",
  },
  {
    brand: "Kawasaki",
    color: "Black",
    weight: 14,
    wheels: 2,
    type: "mountain",
    hasBasket: false,
    hasBell: true,
    hasLights: true,
    description: "",
  },
  {
    brand: "Audi",
    color: "Silver",
    weight: 1700,
    wheels: 4,
    engine: "Electric",
    seats: 5,
    doors: 4,
    description: "",
  },
  {
    brand: "BMW",
    color: "White",
    weight: 2000,
    wheels: 4,
    engine: "Gasoline",
    seats: 5,
    doors: 4,
    description: "",
  },
  {
    brand: "Honda",
    color: "Red",
    weight: 12,
    wheels: 2,
    type: "electric",
    hasBasket: true,
    hasBell: false,
    hasLights: true,
    description: "",
  },
  {
    brand: "Scott",
    color: "Blue",
    weight: 9,
    wheels: 2,
    type: "road",
    hasBasket: false,
    hasBell: true,
    hasLights: false,
    description: "",
  },
  {
    brand: "Mercedes",
    color: "Black",
    weight: 2200,
    wheels: 4,
    engine: "Diesel",
    seats: 7,
    doors: 5,
    description: "",
  },
];

export const allowedEngines = ["Electric", "Diesel", "Gasoline"] as const;

export const allowedVehicleTypes = ["Car", "Bike"] as const;

export const heroes: Hero[] = [
  { name: "Arthas", Occupation: "Paladin", level: 45 },
  { name: "Jaina", Occupation: "Mage", level: 50 },
  { name: "Thrall", Occupation: "Shaman", level: 48 },
  { name: "Tyrande", Occupation: "Priest", level: 46 },
  { name: "Illidan", Occupation: "Demon Hunter", level: 55 },
  { name: "Sylvanas", Occupation: "Ranger", level: 52 },
  { name: "Anduin", Occupation: "Priest", level: 40 },
  { name: "Anna", Occupation: "Ranger", level: 2 },
  { name: "Malfurion", Occupation: "Druid", level: 47 },
  { name: "Valeera", Occupation: "Rogue", level: 43 },
  { name: "Kael'thas", Occupation: "Mage", level: 49 },
];

export const allowedOccupations = [
  "",
  "Paladin",
  "Mage",
  "Shaman",
  "Priest",
  "Demon Hunter",
  "Ranger",
  "Druid",
  "Rogue",
] as const;

export const blogPosts: BlogPost[] = [
  {
    title: "The Rise of TypeScript",
    body: "TypeScript has become one of the most popular languages for modern web development...",
    date: "2024-12-01",
    author: "Jane Doe",
    category: "Technology",
  },
  {
    title: "10 Tips for Staying Productive",
    body: "Productivity is essential for success. Here are 10 tips to help you stay on track...",
    date: "2024-11-28",
    author: "John Smith",
    category: "Productivity",
  },
  {
    title: "The Art of Minimalism",
    body: "Minimalism isn't just a design trend; it's a lifestyle choice. Learn how to live simply...",
    date: "2024-11-20",
    author: "Emily Brown",
    category: "Lifestyle",
  },
  {
    title: "Exploring the Great Outdoors",
    body: "There's nothing quite like a weekend hike to reconnect with nature...",
    date: "2024-11-15",
    author: "Michael Johnson",
    category: "Travel",
  },
  {
    title: "Healthy Eating Habits",
    body: "Eating healthy doesn't have to be complicated. Start with these simple tips...",
    date: "2024-11-10",
    author: "Sarah Lee",
    category: "Health",
  },
  {
    title: "Top 5 Programming Frameworks in 2024",
    body: "With so many frameworks available, these 5 stand out in 2024...",
    date: "2024-12-02",
    author: "Chris Evans",
    category: "Programming",
  },
  {
    title: "How to Master Public Speaking",
    body: "Public speaking is a crucial skill. Here's how to gain confidence and connect with your audience...",
    date: "2024-11-05",
    author: "Amy Wilson",
    category: "Education",
  },
  {
    title: "Traveling on a Budget",
    body: "You don't need to be rich to travel. Here are tips for seeing the world without breaking the bank...",
    date: "2024-11-01",
    author: "Tom Harris",
    category: "Travel",
  },
  {
    title: "The Future of Artificial Intelligence",
    body: "AI continues to evolve rapidly. What can we expect in the next decade? Here's an analysis...",
    date: "2024-12-10",
    author: "Sophia Green",
    category: "Technology",
  },
  {
    title: "Mindfulness for Stress Relief",
    body: "Mindfulness practices can help you reduce stress and improve your mental well-being...",
    date: "2024-11-18",
    author: "Daniel White",
    category: "Health",
  },
  {
    title: "Don't joke about this",
    body: "It's not good to joke about things that are not funny",
    date: "2025-01-23",
    author: "Daniel White",
    category: "Lifestyle",
  },
];

export const allowedCategories = [
  "",
  "Technology",
  "Productivity",
  "Lifestyle",
  "Travel",
  "Health",
  "Programming",
  "Education",
] as const;

export const allowedAuthors = [
  "",
  "Jane Doe",
  "John Smith",
  "Emily Brown",
  "Michael Johnson",
  "Sarah Lee",
  "Chris Evans",
  "Amy Wilson",
  "Tom Harris",
  "Sophia Green",
  "Daniel White",
] as const;

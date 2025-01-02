//classes

export class Character {
  constructor(
    public name: string,
    public age: number
  ) {}
}

export class LocalHero extends Character {
  sayHello() {
    return `Hello, I am ${this.name}, and I'm ${this.age} years old`;
  }
  sayNothing() {
    return "nothing";
  }

  calculatePower(level: number, experience: number): number {
    return level * experience;
  }

  aging(aging: number): void {
    this.age += aging;
  }
}

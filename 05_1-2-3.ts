interface Human {
  name: string;
}

interface SportsMan extends Human {
  age: number;
}

class SoccerMan implements SportsMan {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

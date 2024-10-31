class Human1 {
  name: string;
  age: number;

  public greet(personName: string): void {
    console.log(`Hello, ${personName}`);
  }

  public introduce(): void {
    console.log(`I'm ${this.name}.`);
    console.log(`${this.age} years old.`);
  }
}

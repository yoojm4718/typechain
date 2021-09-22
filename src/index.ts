class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jungmin = new Human("Jungmin", 20, "male");

const sayHi = (person: Human) => {
  console.log(
    `Hello ${person.name}, you are ${person.age} and ${person.gender}`
  );
};

sayHi(jungmin);

export {};

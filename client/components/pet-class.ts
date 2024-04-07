class Pet {
  private name: string
  private owner: string
  private age: number
  private specie: string

  constructor(name: string, owner: string, age: number, specie: string) {
    this.name = name
    this.owner = owner
    this.age = age
    this.specie = specie
  }

  greet(): string {
    return `*sniff sniff* 
    Hello, I'm ${this.name}. ${this.owner} is my owner and I am a ${this.age} year old ${this.specie}.`
  }
}

class Dog extends Pet {
  constructor(name: string, owner: string, age: number) {
    super(name, owner, age, 'pupper')
  }

  speak(): string {
    return 'Woof woof!'
  }
}

class Cat extends Pet {
  constructor(name: string, owner: string, age: number) {
    super(name, owner, age, 'cat')
  }

  speak(): string {
    return 'meoww'
  }
}

export const pet1: Dog = new Dog('Koda', 'Haruka', 1)
export const pet2: Dog = new Dog('Autumn', 'Catherine', 0.4)
export const pet3: Cat = new Cat('Theo', 'Amy', 5)

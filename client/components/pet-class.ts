class Pet {
  private name: string
  private owner: string
  private age: number
  private specie: string
  private speech: string

  constructor(
    name: string,
    owner: string,
    age: number,
    specie: string,
    speech: string,
  ) {
    this.name = name
    this.owner = owner
    this.age = age
    this.specie = specie
    this.speech = speech
  }

  greet(): string {
    let a: string
    if (this.age === 8) {
      a = 'an'
    } else {
      a = 'a'
    }
    return `*sniff sniff* 
    Hello, I'm ${this.name}. ${this.owner} is my owner and I am ${a} ${this.age} year old ${this.specie}.`
  }

  speak(): string {
    return `${this.speech}`
  }
}

class Dog extends Pet {
  constructor(name: string, owner: string, age: number) {
    super(name, owner, age, 'pup', 'woof')
  }
}

class Cat extends Pet {
  constructor(name: string, owner: string, age: number) {
    super(name, owner, age, 'cat', 'meow')
  }
}

class Rabbit extends Pet {
  constructor(name: string, owner: string, age: number) {
    super(name, owner, age, 'bunny', 'squeak')
  }
}

export const pet1: Dog = new Dog('Koda', 'Haruka', 1)
export const pet2: Dog = new Dog('Autumn', 'Catherine', 0.4)
export const pet3: Cat = new Cat('Theo', 'Amy', 5)
export const pet4: Rabbit = new Rabbit('Bunny', 'Cae', 3)

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

export const pet1: Pet = new Pet('Koda', 'Haruka', 1, 'pupper')
export const pet2: Pet = new Pet('Autumn', 'Catherine', 0.4, 'pupper')
export const pet3: Pet = new Pet('Theo', 'Amy', 5, 'cat')

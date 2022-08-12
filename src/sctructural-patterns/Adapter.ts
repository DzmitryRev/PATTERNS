/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface ITransport {
  drive(): void;
}

class Car implements ITransport {
  drive() {
    console.log('Car rides');
  }
}

interface IAnimal {
  move(): void;
}

class Camel implements IAnimal {
  move() {
    console.log('Camel moves!');
  }
}

/**
 * Traveler wants to travel, but he can travel by transport realised ITransoprt interface.
 * One day he needs to ride throw desert, but transoprt realised by ITrasoprt can't do this.
 * Travaler needs to ride throw desert using camel, but camel realise IAnimal interfase.
 * We needs to create an adapter to allow to use camel!
 */

class Traveler {
  travel(transport: ITransport) {
    transport.drive();
  }
}

class AnimalToTransportAdapter implements ITransport {
  animal: IAnimal;

  constructor(animal: IAnimal) {
    this.animal = animal;
  }

  drive() {
    this.animal.move();
  }
}

function Programm() {
  const Jack = new Traveler(); // Create new travaler named Jack
  const car = new Car();
  Jack.travel(car); // Jack rides car!
  // DESERT! Jack is forced to leave the car and sit on a camel
  const camel = new Camel();
  // Jack.travel(camel); Error!
  const adaptedAnimal = new AnimalToTransportAdapter(camel);
  Jack.travel(adaptedAnimal); // Works! Jack on the camel!
}

export default Programm;

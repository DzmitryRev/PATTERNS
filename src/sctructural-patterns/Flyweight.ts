/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Flyweight complements the Factory Method template in such a way that when a client calls a
 * Factory Method to create a new object, it looks for an already created object with the same
 * parameters as the required one, and returns it to the client. If there is no such object,
 *  the factory will create a new one.
 */

class Flyweight {
  firstname: string;

  age: number;

  constructor(firstname: string, age: number) {
    this.firstname = firstname;
    this.age = age;
  }
}

class FlyweightFactory {
  flyweights: Flyweight[];

  create(firstname: string, age: number) {
    const candidate = this.getFlyweight(firstname);
    if (candidate) return candidate;
    const newFlyweight = new Flyweight(firstname, age);
    this.flyweights.push(newFlyweight);
    return newFlyweight;
  }

  getFlyweight(firstname: string) {
    return this.flyweights.find((item) => item.firstname === firstname);
  }
}

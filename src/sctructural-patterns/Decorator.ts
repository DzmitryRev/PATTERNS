/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface IPizza {
  prise(): number;
}

/**
 * We needs to add some species in our pizza.
 * For example we can add more tomatoes in our pizza and this make this pizza more expinsive.
 * We will wrap our pizza in decorator wich will add price for this pizza.
 */

class ItalianPizza implements IPizza {
  prise(): number {
    return 10;
  }
}

class AmericanPizza implements IPizza {
  prise(): number {
    return 7;
  }
}

abstract class Decorator implements IPizza {
  pizza: IPizza;

  constructor(pizza: IPizza) {
    this.pizza = pizza;
  }

  abstract prise(): number;
}

class MoreTomatoPizza extends Decorator {
  prise(): number {
    return this.pizza.prise() + 5;
  }
}

class MoreCheesePizza extends Decorator {
  prise(): number {
    return this.pizza.prise() + 3;
  }
}

function Programm() {
  const pizza1 = new ItalianPizza();
  console.log(pizza1.prise(), 'italian pizza');
  const pizza2 = new MoreTomatoPizza(new AmericanPizza());
  console.log(pizza2.prise(), 'american pizza with more tomatos');
}

export default Programm;

/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface IProductOne {
  methodOne(): string;
}
interface IProductTwo {
  methodTwo(): string;
}

class FirstProduct implements IProductOne {
  methodOne(): string {
    return 'Product one, method one';
  }
}
class SecondProduct implements IProductTwo {
  methodTwo(): string {
    return 'Product two, method two';
  }
}

abstract class AbstractFactory {
  abstract createProductOne(): IProductOne;
  abstract createProductTwo(): IProductTwo;
}

class AbsFactoryOne extends AbstractFactory {
  createProductOne(): IProductOne {
    return new FirstProduct();
  }

  createProductTwo(): IProductTwo {
    return new SecondProduct();
  }
}

/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * 1. We have two main abstrations: Creator and Product
 * 2. We can create some products implements IProduct int.
 * 3. And we can create Product Creator for every Product!
 */

interface IProduct {
  operation(): string;
}

class ProductOne implements IProduct {
  operation(): string {
    return 'Product One';
  }
}

class ProductTwo implements IProduct {
  operation(): string {
    return 'Product Two';
  }
}

abstract class Creator {
  abstract factory(): IProduct;
}

class ProductOneFactory extends Creator {
  factory(): IProduct {
    return new ProductOne();
  }
}

class ProductTwoFactory extends Creator {
  factory(): IProduct {
    return new ProductTwo();
  }
}

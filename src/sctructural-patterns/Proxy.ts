/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Proxy is a structural design pattern that allows you
 * to substitute special substitute objects for real objects.
 * These objects intercept calls to the original object,
 * allowing you to do something before or after the call is passed to the original.
 */

class Store {
  items: number[];

  constructor() {
    this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  getItem(item: number) {
    console.log('item from store');
    return this.items.find((digit) => digit === item);
  }
}

class StoreProxy {
  store: Store;

  cash: number[];

  constructor() {
    this.cash = [];
  }

  getItem(i: number) {
    if (!this.store) {
      this.store = new Store();
    }
    const itemInCash = this.cash.find((digit) => digit === i);
    if (!itemInCash) {
      const item = this.store.getItem(i);
      this.cash.push(item);
      return item;
    }
    console.log('item from cash');
    return itemInCash;
  }
}

function Programm() {
  const a = new StoreProxy();

  console.log(a.getItem(1)); // from store
  console.log(a.getItem(1)); // from cash
  console.log(a.getItem(2)); // from store
  console.log(a.getItem(2)); // from cash
  console.log(a.getItem(2)); // from cash
}
export default Programm;

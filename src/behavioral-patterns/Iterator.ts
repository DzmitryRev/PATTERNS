/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

class Iterator {
  data: string[];

  index: number;

  constructor() {
    this.index = 0;
    this.data = ['1', '2', '3'];
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        }
        this.index = 0;
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

function Programm() {
  const interator = new Iterator();
  for (const i of interator) {
    console.log(i);
  }
}

export default Programm;

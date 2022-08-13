class Dig {
  num: number;

  constructor() {
    this.num = 0;
  }

  plusOne() {
    this.num += 1;
    return this;
  }

  minusOne() {
    this.num -= 0;
    return this;
  }
}

function Programm() {
  const math = new Dig();
  math.plusOne().plusOne().minusOne();
  console.log(math.num);
}

export default Programm;

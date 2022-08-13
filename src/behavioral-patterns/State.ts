/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

abstract class Light {
  light: string;

  constructor(light: string) {
    this.light = light;
  }

  abstract sign(): string;
}

class Green extends Light {
  constructor() {
    super('green');
  }

  sign() {
    return 'Едь';
  }
}
class Yellow extends Light {
  constructor() {
    super('yellow');
  }

  sign() {
    return 'Готовься';
  }
}
class Red extends Light {
  constructor() {
    super('red');
  }

  sign() {
    return 'Стой';
  }
}

class TrafficLight {
  state: Light[];

  currentState: Light;

  constructor() {
    this.state = [new Green(), new Yellow(), new Red()];
    const [green, yellow, red] = this.state;
    this.currentState = green;
  }

  changeState() {
    const total = this.state.length;
    const currentIndex = this.state.findIndex((item) => item === this.currentState);
    if (currentIndex + 1 < total) {
      this.currentState = this.state[currentIndex + 1];
    } else {
      this.currentState = this.state[0];
    }
  }

  sing() {
    return this.currentState.sign();
  }
}

function Programm() {
  const trafficLight = new TrafficLight();

  console.log(trafficLight.sing());
  trafficLight.changeState();
  console.log(trafficLight.sing());
  trafficLight.changeState();
  console.log(trafficLight.sing());
  trafficLight.changeState();
  console.log(trafficLight.sing());
}

export default Programm;

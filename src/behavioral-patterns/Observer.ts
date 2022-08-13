/* eslint-disable max-classes-per-file */
class Observer {
  state: {
    dig: number;
  };

  initialState: {
    dig: number;
  };

  constructor(state: { dig: number }) {
    this.state = state;
    this.initialState = state;
  }

  update(changes: string) {
    switch (changes) {
      case 'increment': {
        this.state.dig += 1;
        break;
      }
      case 'decrement': {
        this.state.dig -= 1;
        break;
      }
      default: {
        this.state = this.initialState;
        break;
      }
    }
  }
}

class Subject {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  fire(changes: 'increment' | 'decrement') {
    this.observers.forEach((obs) => {
      obs.update('increment');
    });
  }
}

function Programm() {
  const stream = new Subject();
  const obs1 = new Observer({
    dig: 1,
  });

  stream.subscribe(obs1);
  console.log(obs1.state);
  stream.fire('decrement');
  console.log(obs1.state);
}

export default Programm;

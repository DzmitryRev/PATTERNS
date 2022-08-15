/* eslint-disable max-classes-per-file */
import AdapterPattern from './sctructural-patterns/Adapter';
import DecoratorPattern from './sctructural-patterns/Decorator';
import FacadePattern from './sctructural-patterns/Facade';
import ProxyPattern from './sctructural-patterns/Proxy';
import ChainOfResponsibility from './behavioral-patterns/ChaintOfResponsibility';
import Observer from './behavioral-patterns/Observer';
import State from './behavioral-patterns/State';
import Iterator from './behavioral-patterns/Iterator';

// AdapterPattern();
// DecoratorPattern();
// FacadePattern();
// ProxyPattern();

// ChainOfResponsibility();
// Observer();

// State();

// Iterator();

// history.pushState(null, null, 'https://google.com');

window.addEventListener('popstate', (e) => {
  console.log(e.state);
});

/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * When there is a complex system, and it is necessary to simplify work with it.
 * The facade will allow you to define one point of interaction between the client and the system.
 */

class TextEditor {
  writeCode() {
    console.log('writing code!');
  }

  save() {
    console.log('saving code!');
  }
}

class Compiller {
  compile() {
    console.log('code compilated');
  }
}

class CRL {
  execute() {
    console.log('running app');
  }

  finish() {
    console.log('close app');
  }
}

class Facade {
  textEditor: TextEditor;

  compiller: Compiller;

  crl: CRL;

  constructor(textEditor: TextEditor, compiller: Compiller, crl: CRL) {
    this.textEditor = textEditor;
    this.compiller = compiller;
    this.crl = crl;
  }

  start() {
    this.textEditor.writeCode();
    this.textEditor.save();
    this.compiller.compile();
    this.crl.execute();
  }

  end() {
    this.crl.finish();
  }
}

function Programm() {
  const textEditor = new TextEditor();
  const compiller = new Compiller();
  const crl = new CRL();

  const app = new Facade(textEditor, compiller, crl);

  app.start();
  app.end();
}

export default Programm;

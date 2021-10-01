/**
 * CLASS INHERITANCE
 */

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run = (speed) => {
    this.speed = speed;
    console.log(`${this.name} is running with ${speed} speed.`);
  };

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }
}

// let animal = new Animal("Dog");
// animal.run(10);
// animal.stop();

class Rabbit extends Animal {
  hide = () => {
    console.log(`${this.name} hides`);
  };
  /**
   * If extended class dont have own method, then those methods will be searched
   * in the parent class.
   * But you can override it.
   * If need to implement in other child class methods use "super.methodName()"
   */
  stop() {
    // method overriding
    /**
     * Normally you need to add some tweaks around
     * existing methods thus use super and add custom code.
     */
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White");
//rabbit.run(57);
rabbit.stop();

/**
 * Not only classes but you can also extend class with a function!
 */

function fun(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends fun("Kay? kas kay?") {}

//let us = new User();
//us.sayHi(); // "Kay?, kas kay?"

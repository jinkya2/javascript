/**
 * CLASSES
 */

class ClassName1 {
  // class fields, set on individual objects, not ClassName1.prototype
  field1 = "fieldvalue";
  //field2 = prompt("Enter field2 value", "default-value");
  constructor(argument1) {
    // invoking the setter.
    this.argument1 = argument1;
  }

  get argument1() {
    console.log("get is called");
    console.log(this);
    return this._argument1 + " by get method.";
  }

  set argument1(value) {
    if (value.length < 4) {
      console.log("Please provide name with more length.");
      return;
    }
    this._argument1 = value;
  }

  /**
   * javascript have dynamic this, depending on context of call, thus
   * the following method will not work for below code sample-
   * var object = new ClassName1("value");
   * object.method2;    // ClassName1{...}
   * setTimeout(object.method1, 1000); // Window{}
   *
   * to solve it, use ()=>
   * method3 = ()={console.log(this)}
   */
  method1() {
    console.log(this.filed1);
  }

  method2() {
    console.info(this);
  }

  method3 = () => {
    console.info(this);
  };
}

let classObject = new ClassName1("Ajinkya"); // ClassName1 {argument1: 'Ajinkya', argument2: undefined}
console.log(classObject);
//classObject.method1(); // ClassName1 {argument1: 'Ajinkya', argument2: undefined}
//console.info(typeof ClassName1); // "function"
//console.info(typeof classObject); // "object"
//console.info(ClassName1 === ClassName1.prototype.constructor); // true
//
//setTimeout(classObject.method2, 1000); // Window {...}
//setTimeout(classObject.method3, 1000); // classObject {...}

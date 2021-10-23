# JavaScript: Scope
## Introdcution
- Prerequisites (Need to be familiar with basics such as variables, functions, objects etc)
## 1. Introdcution to Variable Scope

### Setup
- VS Code (Install live server extension)
- Create a folder with html and script files and serve with the installed extention.

### What is scope in JavaScript?
- The current context of execution.
- The context in which values or expressions are visible or can be referenced.
- example
```javascript
var warrior = "Ninja";

const screamWarrior=()=>{
    let warrior2 = "Samurai";
    console.log(warrior, warrior2);
}

screamWarrior();
console.log(warrior, /*warrior2*/);

```

### What are Closures?
- Inner function having access to external variables. By creating a function inside function, we create a closure.
- A closure gives you access to outer functions scope from an inner function.
- example
```javascript
var a = 1;

const function1 = ()=>{
    let b = 2;
    return {
        function2: ()=>{
            console.log(a, b);
        }
    }
}
function1()['function2']();
```
- Quizz (GUess the output) 
- [Link](https://dmitripavlutin.com/javascript-closures-interview-questions/)
```javascript
(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);
```
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
```
```javascript
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // What is logged?
```

### The different types of Scopes
- local, global and block scope
- local (identifiers defined inside a function limiting scope to function)
- global (identifier defined at file root level, not inside any function is global )
- block (with new variable syntax let and const block scope {} is defined)

### Hositing explained
- Hoisting is a way of thinking about how execution context works in JavaScript.
- Process whereby interpreter allocates memory for variables and function declarations prior to code execution.
- Declarations with var are initialised with default value of `undefined` and declarations with `let` and `const` are not initialized as part of hoisting. 
- `let` and `const` are also hoisted but not initialized with default value. 
- `let` variables cannot be read/written until fully initalized. Accessing them before initialization leads to `ReferenceError`. From start of the block until initialization, the variabels are said to be in `TDZ` (Temporal Dead Zone).
- JavaScript declarations are hoisted not initializations.
```javascript
console.log(value); // guess the output
var value;  // declaration
value = 11; // initialization
```
```javascript
console.log(value); // guess the output
value = 12;
```

## 2. Global Variables

### What are global variables?
- A variable declared at the root of program, not inside any function is called global variable. They exists throughout program execution.
- A vairable declared without var/let/const declaration, it will be automatically global scope(except use strict directive)

### Challenge: Defined global variable
- Array of warriors: globally scoped.

### Solution: Defined global variable
```javascript
let warriors1 = [{name: 'A', type: 'Ninja'}, {name: 'B', type: 'Samurai'}];
const warriors2 = [{name: 'A', type: 'Ninja'}, {name: 'B', type: 'Samurai'}];
var warriors3 = [{name: 'A', type: 'Ninja'}, {name: 'B', type: 'Samurai'}];
```

## 3. Local Variables

### What are local variables?
- Variables declared inside functions.
- Lifetime is only for function execution.
```javascript
const test = ()=>{
    var p = 1;
    let q = 2;
    return `${p} and ${q}`
}

console.log(test());
console.log(p);
console.log(q);
```

### Challenge: Defined local variable
- Function returning global and local variable multiplication

### Solution: Defined local variable
```javascript
let l = 11;

function multiply(){
    let m = 12;
    return (console.log(l*m));
}

multiply();
```

## 4. Block-Scoped Variables

### What are block scoped variables?
- Declarations with `let` and `const` are only accesssible inside block.
- let is mutable while const is immutable.

### Explore Block scoped variables with code
```javascript

```
### Challenge: Defined let/const variable
### Solution: Defined let/const variable

## Conclusion






# INDEX

## Scope [00 H 41 M]
## Functions [01 H 25 M]
## Events [01 H 11 M]
## Functional Programming [01 H 00 M]
## JSON Integration Technique [01 H 12 M]
## Closures [01 H 00 M]
## Learning Functional Programming [02 H 44 M]
## Prototypes [01 H 00 M]
## Classes [00 H 37 M]
## Templating [02 H 00 M]

## Async [01 H 30 M]

## Debugging [02 H 50 M]

## Patterns [01 H 00 M]

## HTML5: Geolocation [00 H 35 M]

## Modern Browser APIs [02 H 00 M]

## ECMAScript 6 [02 H 00 M]

## Code Clinic [03 H 10 M]

## Security Essentials [00 H 45 M]

## Ethical Hacking [00 H 32 M]
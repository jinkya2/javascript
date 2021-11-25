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
var a = 20;
{
  let exe = 30;
  console.log(exe); // Expected output: 30
}
console.log(a) // Expected output: 20
console.log(exe); // Uncaught ReferenceError: exe is not defined
```
### Challenge: Defined let/const variable
- Immutable array with let./const

### Solution: Defined let/const variable
```javascript
const warriors = [
    {name: 'A', type: 'Ninja', agility: 19},
    {name: 'B', type: 'Samurai', agility: 28},
    {name: 'C', type: 'Viking', agility: 23}
]

function warriorAgility(){
    warriors.map((warrior)=>{
        if(warrior['agility']>20){
            console.log(`${warrior.name} is eligible.`);
        }
    })
}

warriorAgility();
```
## Conclusion






















# Functions

## Introduction
- Familiar wiyh HTML and basic JavaaScript.

## 1. Getting started

### What are functions?
- Series of statements grouped together in block. 
- function name is optional function(){}
```javascript
function functionName(param1, pram2, ...paramN){
    // statements
    return resultValue;    // default undefined
}

functionName(arg1, arg2, ...arg3);    // function invocation
```

### Declaring functions
- **Function Declaration** / Traditional Definition
``` javascript
function Name(param){
    // statements
    return value;
}
```

- **Anonymous function** / Definition Expression 
- - more flexible
- - can invoked immediately function(){}()
- - useful when needed once
```javascript
let funName = function(){}
funName();
```
```javascript
var plus = function(a,b){
    return console.log(a+b);
}();    // NaN
```
### Invoking function traditionally
- Four ways of invocation
- - Functions
- - Methods
- - Constructors
```javascript
const sum = new Function('a', 'b', 'return a+b'); 
sum(1, 2);
```
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){console.log(`Hi ${this.name}`)};
}
const person1 = new Person('Rakesh', 25);
```
- - Call and apply methods

- Function also gets arguments and this but arguments is no longer best practice and spread operator are preffered ove them.
```javascript
function plus(a, b){
    return (
        console.log(a+b),
        console.log(this),
        console.log(arguments)
    )
}

plus(2, 3)
```

## 2. Function Invocation

### Using functions as Objects
- Method is a function as property in an object.
```javascript
let info={
    full_name: "Ajinkya",
    title: "Staff Author",
    links: [
        {blog: "https://abc.com"},
        {twitter: "https://xyz.com"}
    ]
}

let calc={
    staus: "Awesome",
    plus: function(a,b){
        return (
            console.log(this),
            console.log(a+b),
            console.log(arguments),
            console.log(this.status)
        )
    }
}

calc.plus(2, 2)
```
- The `this` argument points to the object
- Invoke the function using dot notation
- THe binding of `this` happens at invocation time

### Invoking Instances through the constructor
```javascript
let Dog = function(){
    let name, breed;
}

firstDog = new Dog;
firstDog.name = "Rober";
firstDog.breed = "DobberMan";
```

- Constructor name should be capitalized as per conventions.
- new keyword creates a new instance of the object.
- the this atguments points to the each instance of the object.
- But instead of creating and assigning these values again and again, simply create a constructor function like
```javascript
function Dog(name, breed){
    this.name=name;
    this.breed=breed;
}
let dog1 = new Dog('A', "Breed1");
let dog2 = new Dog('B', "Breed2");
```
### Expanding functionality through prototype
- JavaScript is Prototypal Inheritance Language.
- Every object can be based on another
- Prototype object gives you access
- All object inherits properties
```javascript
let Dog = function(){
    let name, breed;
}
dog1 = new Dog;
Dog.prototype.speak = function(word){
    console.log(word);
}
dog1.speak("Hello");
```

### Understanding call and apply invocation
- Indirect Invocation
- Define the value of `this` argument.
- Control: `this` and `arguments`
- `call` passes a value and apply an `array`
```javascript
let speak = function(text){
    console.log(text);
    console.log(this);
}

var saySomething={
    normal: "meow",
    love: "purr"
}

speak.call(saySomething, saySomething.normal);
```
```javascript
let speak = function(text){
    console.log(text);
    console.log(this);
}

var saySomething={
    normal: "meow",
    love: "purr"
}

speak.apply(saySomething, ["meeyaw", "oii"]);
```

### Using the arguments parameter
- List of elements passed
- An array like object (Convert with Array.from(X))
- Numerical index arguments[x]
- Length arguments.length
- Loop through arguments possible
- Can't use all array methods as arguments are not native arrays. 



### Returning values

### Challenge: Social Media Navigator

### Solution: Social Media Navigator

## 3. Using Functions

### Using anonymous closure

### Understanding hoisting and variable scope

### Creating and namespacing modules

### Passing arguments and setting module defaults

### Chaining module method calls 

## Conclusion





















# INDEX

<del>## Scope [00 H 41 M]</del>
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


# OTher

## Study less, study smart
- Get all material, check your watch, start working, the time you feel i cant go onward, note the time (typically its 25-30 minutes).
- Jinet with 1.0 CGPA, decided to study for six hours a night, each day without break. Her second quater gradepoint 0.0 CGPA. Studying more is not neccessarily useful.
- Thigs that are reinforced we tend to do more of. Things that are punished or ignored, we tend to do less of.
- Are you feeling good or focused?
- Moment you start to slide, youre shoveling against tide. TAKE A SHORT BREAK. 
- Study half hour, take 5 min break, do fun, talk, music, anything, treat for your half hour study.
- True study or library at place of residence. A quit place. Whats the primary function of bedroom? Sleep And secondary? Sex ;) Primary function of dining table? eating.
- If you have limited space, make settings, install a study lamp, make sitting arrangements, SWITCH between spaces study room and bed room!
- If it doesnt change your behaviour, its just in your head. To be  a true learning experience, you have to behave differently.
- The more active you are in your learning, the more effective!
- When your reading over and over, the term R-O-T-E, repetittion, maybe work, but not for everyone.
- [19:30]
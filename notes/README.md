## Array

### Concept
- Arrays are special types of Object.
- Ordered collection of elements allowing duplicates.
- DO NOT make array work like objects, else array specific optimizations will be turned off by engine.
    - Adding non-numeric value, `arrName["key"] = 12`
    - Making holes, `arr[0]` and then `arr[99]`, nothing in between.
    - Filling array in reverse order, like `arr[100]` and then `arr[99]`
- Methods `push pop` runs faster than `shift unshift`.

### Declaration
```javascript
    let arr = new Array();
    let arr = [];
    let 2Darray = [[1,2,3], [4,5,6], [7,8,9]];
```

### Access/ Assign
```javascript
    let value = arrayName[index]; // no negative index!
    arrayName[index] = newElement
```

### Methods
```javascript
    arr.push(element1,..elementN) // append element to the end AND  returns the array length
    arr.pop() //removes the last element AND returns it.
    arr.shift //removes the first element AND returns it.
    arr.unshift(element1,..elementN)
```

## Properties
- arrayName.length;
    - Modifying array will also truncate actual array.
    ```javascript
    let arr = [1,2,3];
    console.log(arr.length); // 3
    arr[99] = 100;
    console.log(arr.length); // 100
    ```
- ```console.log(typeOf([])); // "object"```

## Iteration
- for loop
    ```javascript
    for(let i=0; i<arr.length; i++){}
    ```
- for of
    ```javascript
    for(let element of arr){}
    ```
- GENERALLY, do not use `for...in`
    - iterates over all properties including non numeric properties and methods.
    - `for...in` is optimized for objects.

### Copy/ Duplicate/ Clone
- **A deep copy** means that all of the values of the new variable are copied and disconnected from the original variable. **A shallow copy** means that certain (sub-)values are still connected to the original variable.
- `DO NOT` create new array by just copying with `= assignment`, it will `STILL` have reference to the old array. WHY? Because in JavaScript objects, arrays and functions are [mutable](https://www.digitalocean.com/community/tutorials/js-mutability), AND all primitives like string, number, boolean, null, undefined, symbol are [immutable](https://www.digitalocean.com/community/tutorials/js-mutability).
```javascript
    let oldA = [1,2,3];
    let newA = oldA;
    oldA.push(4,5)
    console.log(newA);
    newA.push(6)
    console.log(oldA);
```
- To create a true copy/ deep copy, you need to go to the deeper levels of the array elements while copying!. 
- For one level, simply use spread operator `[...arrayName]`
- **If** you don't have JSON incompatible values like undefined, functions or symbol use JSON, basically following method works only with number, string and object literals.
    ```javascript
    let newArray = JSON.parse(JSON.stringify(oldArray));
    ```
- Use **lodash** library
    ```javascript
    let newArray = _.cloneDeep(oldArray);
    ```
- **Recursion** This is a really broad concept. And this [link](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript)  reference of object deep copy also applies to arrays! Feel free to try and reply with solution :)
/**
 * Error Handeling
 */

/**
 * A] Error Handeling: try...catch
 *
 * - Usually  a script immediately stops in case of errors, printing it to console.
 * - Instead of abrupt stops, we can use try...catch, do something more reasonable.
 * - try...catch only handles runtime errors. Syntax errors cant be handled by try...catch
 * - try...catch cant handle scheduled code, like setTimeout. The engine will already left the try...catch construct and will be executed later on. To solve this, use try catch inside the scheduled code i.e. setTimeout
 *
 * - Error Objects
 * -- Error {name, message, stack}
 *
 * - Throw your own errors
 *
 *
 */

/* Example 1
try {
  console.log('try');
  
} catch (err) {
  console.log(err);
}
*/

/* Example 2
try{
    {{{}    // Uncaught SyntaxError: Unexpected token 'catch'
}catch(err){
    console.log(err);
}
*/

/* Example 3
try{
    setTimeout(function(){dfs}, 3000); // Uncaught ReferenceError: dfs is not defined
}catch(err){
    console.log(err);
}

setTimeout(
    function() {
        try{
            sdv;
        }catch(err){
            alert("err");
        }
    }, 1000)
*/

/*
Example 4

try {
  let json1 = '{"name": "Ajinkya", "age":30}';
  let json2 = "{bad json}";
  let pJson1 = JSON.parse(json1);
  let pJson2 = JSON.parse(json2);
} catch (err) {
  console.log("Apologies, the data has errors, please try again later.");
  console.log(err.name);
  console.log(err.message);
}
*/

/*
Example 5

let json = `{"age": "95"}`;

try {
  let pJson = JSON.parse(json);
  if (!pJson.name) {
    throw new Error("Incomplete data, no name");
  }
  alert(pJson.name);
} catch (err) {
  console.log(err);
}
*/

/*
Example 5
*/
try{
    let value = prompt("For error type 1, for no error type 2");
    console.log(`${value} with type ${typeof value}`);
    if(value==='1'){
        doesntMakeAnySense();
    }
}catch(err){
    console.log(` ${err.name} \n ${err.message} \n ${err.stack}`)
}finally{
    console.log(`I'm inevitable, snap!`)
}



/**
 * B] Error Handeling: Custom Errors, extending Error
 */

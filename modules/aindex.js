/**
 * Modules
 * 
 * For long time, javascript didnt have a language level module syntax.
 * Some old module systems - AMD, CommonJS, UMD
 * 
 * With ECMAScript 2015, lanaguage level module launched.
 * 
 * Modules work only via HTTP(s), not locally
 * Core modules, different than old regular third party modules, they are valid for both browser and server side javascript.
 * Always "use strict" 
 * Each module have its own top-level scope!
 * 
 * A module code is evaluated only the first time its imported, meaning, even if you import more than one time, its not gonna run more than once, thats why importing function and running them is done.
 * 
 * In module, `this` is undefined.
 * 
 * Module scripts are always deferred
 * Async works on inline scripts. <script async module="module"></script>
 * 
 * External scripts fetched from another origin requires CORS Headers.the server must respond with Access-Control-Allow-Origin
 * 
 * No bare modules like import x from 'xyz' is allowed!
 * Old browsers dont understand type="module"

<script type="module">
  alert("Runs in modern browsers");
</script>

<script nomodule>
  alert("Modern browsers know both type=module and nomodule, so skip this")
  alert("Old browsers ignore script with unknown type=module, but execute this.");
</script>


 * Build tools - In real life, browser modules are rarely used.
 * 
 * 
 * Ways to export
 * 1. export function name(){}
 *    export let name = ...
 *    exort const NAME = ...
 *    export class Name{...}
 * 2. function name1(){...}
 *    let a = 11;
 *    export {name1, a}
 * 
 * Ways to import
 * 1. import {a, b} from './some/path/name.js';
 * 2. import * as object1 from './some/path/name.js';
 * 
 * AS
 * import { aname as a, bname as b } './some/path/name.js';
 * export { aname as a, bname as b }
 * 
 * 
 */

// Footnotes
// https://www.sitepoint.com/using-es-modules/
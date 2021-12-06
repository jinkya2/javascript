console.log(import.meta.url);

window.value1 = "script1 value";

import { sayHello, admin } from './script2.js'
admin.name = "narwade";

console.log(value1);
sayHello();
require('./utils.js');
require('./login.js');

import {login} from "./login.js"
import {Utils} from "./utils.js"

debugger;
login('admin', 'pwd');

let u = new Utils();
u.log("all loaded and executed");

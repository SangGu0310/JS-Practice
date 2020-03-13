
// module

// mylogger에있는 log만 뽑아서 쓰겠다
import {log} from '../basic/myLogger.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
log("my first test data");
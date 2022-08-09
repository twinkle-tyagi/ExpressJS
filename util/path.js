const path = require('path');

module.exports = path.dirname(process.mainModule.filename); // returns the directory name of a path
// process is a global variable, mainModule refers to the main module which started your application,(here app1.js)
//filename finds out file in which main module resides.
// process.mainModule.filename gives us path for file which is responsible for running our application. we put this file name into dirname to get the directory.

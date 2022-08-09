const path = require('path'); // import the path module
const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('/',(req,res,next) => {
    // res.sendFile('views/shop.html');  //but it will not work, as it will not be able to access file through this path.
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // we create a path using join method. join returns a path, it constructs the path by concatenating different segments. join() takes 3 parameters, 1. __dirname = global variable made available by nodeJS. It holds absolute path on our OS to this project folder. 2. folder name that we wants to go in. 3. filename
    // this works in both windows and linux system.
    //__dirname will point to folder where shop.js is(routes folder), but we want path for expressJS folder becuase views folder is in expressJS folder.
    // so we add '../' to go one folder up. 

    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));// cleaner way
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // even cleaner way
});

module.exports = router;
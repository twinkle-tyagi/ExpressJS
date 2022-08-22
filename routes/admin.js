const path = require('path');
const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router(); // creating router by calling express.Router()
//It is like a mini express app which we can export.

//replace app with router because router is express application now.

/*
router.get('/add-product',(req, res, next) => {
    res.send('<html><body><form action = "/product" method = "POST"> <input type = "text" name="title"> <input type = "text" name = "size"> <button type="submit"> Add Product </button> </form></body></html>');
});

router.post('/product',(req, res, next) => { 
    console.log(req.body); 
    res.redirect('/');
});
*/

//same paths can be used if methods differ.
// here both request has same path /add-product, but are different routes as methods are different for both
// router.get('/add-product',(req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); //cleaner way
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //inject root directory we found.
//});

//changing to MVC
router.get('/add-product', );

router.post('/add-product',(req, res, next) => { 
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router;

const express = require('express');
const bodyparser = require('body-parser'); // to parse the body of requests

const app = express();

app.use(bodyparser.urlencoded({extended: false})); //registers a middleware

app.use('/add-product',(req, res, next) => {
    res.send('<html><body><form action = "/product" method = "POST"> <input type = "text" name="title"> <input type = "text" name = "size"> <button type="submit"> Add Product </button> </form></body></html>');
});

app.use('/product',(req, res, next) => {
    console.log(req.body); // it will give undefined so we will use body parser
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    res.send('<h1> This is Express JS </h1>');
});


app.listen(3000); // used to create server as well as call it on port 3000
const express = require('express');
const bodyparser = require('body-parser'); // to parse the body of requests

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const app = express();

app.use(bodyparser.urlencoded({extended: false})); //registers a middleware

//app.use(adminRoutes); // to use from admin.js
//app.use(shopRoutes); // to use from shop.js

// both request of admin can be written as /admin/add-product, as add-product route is in admin.js file
// we can use this /admin as filter for requests

app.use('/admin',adminRoutes); // now only request with path /admin/add-products will be able to access add-products, otherwise give 404 error.
app.use(shopRoutes); // to use from shop.js

/* cleaner way to write is to put it into admin..js

app.use('/add-product',(req, res, next) => {
    res.send('<html><body><form action = "/product" method = "POST"> <input type = "text" name="title"> <input type = "text" name = "size"> <button type="submit"> Add Product </button> </form></body></html>');
});

*/

//middleware will execute for all requests, get and post both
/*
app.use('/product',(req, res, next) => {
    console.log(req.body); // it will give undefined so we will use body parser
    res.redirect('/');
});
*/

/* cleaner way to write is to put this into admin.js

// to make it fire only for post request we can write app.post instead of app.use,
// similarly for get requests we can write app.get
app.post('/product',(req, res, next) => {   // this middleware(inside code) will only trigger for post request
    console.log(req.body); // it will give undefined so we will use body parser
    res.redirect('/');
});

*/

/* wwe can put this code into shop.js 

app.use('/',(req,res,next) => {
    res.send('<h1> This is Express JS </h1>');
});

*/

// to send 404 page not found error. we use app.use at last of all the middlewares.
// this app.use will act as catch all.

app.use((req, res, next) => { // we dont need path, but can add '/'
    //res.send('<h1> This is error page </h1>'); // to send error msg
    res.status(404).send('<h1> This is error page </h1>'); // we use status to send status, should use like this.
});

app.listen(3000); // used to create server as well as call it on port 3000
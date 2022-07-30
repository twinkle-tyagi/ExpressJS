//const http = require('http');  // we can remove this as we can create server and listen on it using app.listen

const express = require('express');

const app = express(); //create express application

/*
app.use((req, res, next) => {    // use allows us to add new middleware
    console.log('This is first');   // next is a function that will transfer you to next middleware
    next();     // we call next() so that our request can travel to another middleware.
}); 
*/

// use() have 5 overloaded constructors, so we can use it in 5 ways

// 1. way 
/*
app.use((req, res, next) => {
    console.log("this is second");
    // res.send();     // res.send is used to send a response. Type is any. means it can send response of any type specified.
    res.send('<h1> This is Express JS </h1>');
    //res.send({Key1: 5});
}); */

// 2. way
// app.use(path, callback);

app.use('/add-product',(req,res,next) => {
    res.send('<h1> Add Product Page </h1>'); // we will not call next(), 
});

app.use('/',(req,res,next) => {
    res.send('<h1> This is Express JS </h1>');
});

/*
const server = http.createServer(app);
server.listen(3000);
*/

app.listen(3000); // used to create server as well as call it on port 3000
const http = require('http');

const express = require('express');

const app = express(); //create express application

app.use((req, res, next) => {    // use allows us to add new middleware
    console.log('This is first');   // next is a function that will transfer you to next middleware
    next();     // we call next() so that our request can travel to another middleware.
}); 

app.use((req, res, next) => {
    console.log("this is second");
    // res.send();     // res.send is used to send a response. Type is any. means it can send response of any type specified.
    //res.send('<h1> This is Express JS </h1>');
    res.send({Key1: 5});
});

const server = http.createServer(app);

server.listen(3000);
const path = require('path');
const express = require('express');

const rootDir = require('../util/path.js');

const contact = express.Router();

contact.get('/contactus',(req, res, next) => {
    //res.sendFile(__dirname, '../', 'views', 'contactus.html');
    //res.redirect('/success.html');
    res.sendFile(path.join(rootDir,'views','contactus.html'));
});


module.exports = contact;
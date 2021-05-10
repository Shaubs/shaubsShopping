const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');

// getting api routes

//using middle ware
app.use(express.static(path.join(__dirname, '../dist/shaubsApp'))) //getting static dist folder which has index.html
app.use(cors())
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

///will be using session to check if user has already logged in
//catch all route requests and direct to index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/shaubsApp/index.html'))//linking app to index.html in dist
})



const port = process.env.PORT || 4200;
app.listen(port, (req, res) => {
    console.log('serverjs running');
})
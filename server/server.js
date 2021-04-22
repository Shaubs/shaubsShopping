const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');

// getting api routes
const api = require('../server/routes/apiRoutes');
const registerRouteCheck = require('../server/routes/registerRoute');
const loginRouter = require('../server/routes/loginRouter');

//using middle ware
app.use(express.static(path.join(__dirname, '../dist/antarctica'))) //getting static dist folder which has index.html
app.use(cors())
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

///will be using session to check if user has already logged in
app.use(session({
    secret: Math.random()
        .toString(36)
        .substring(2, 15),
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1 * 24 * 3600000 // maxage or expiry must be set inside cookie object after 1.16 version in express session.
    }
}))

app.use('/api/employee', api);
app.use('/api/register', registerRouteCheck)
app.use('/api/login', loginRouter)
//catch all route requests and direct to index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/antarctica/index.html'))//linking app to index.html in dist
})



const port = process.env.PORT || 4200;
app.listen(port, (req, res) => {
    console.log('serverjs running');
})
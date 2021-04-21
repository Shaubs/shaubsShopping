const express = require('express');
const sequelize = require('../config/database');
const LoginRouter = express.Router();

LoginRouter.route('/:email/:password')
    .get((req, res, next) => {
        sequelize.query(`Select * from user where emailID='${req.params.email}'`)
            .then((result) => {
                if (result[1].length > 0) {
                    console.log(result[1])
                    console.log(result[1][0].password, req.params.password)
                    let msg = (result[1][0].password == req.params.password) ? 'Valid User' : 'Incorrect Password';
                    result = { message: msg }
                    if (msg == 'Valid User') { req.session.auth == true }
                }
                else {
                    result = { message: 'Does not exist' };
                }

                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json({ success: true, info: null, result: result });
            }
            )
            .catch(err => { res.status(400).json({ success: false, info: err.status, result: null, message: err + 'wth' }) })

    })
module.exports = LoginRouter;

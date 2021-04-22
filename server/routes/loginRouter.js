const express = require('express');
const sequelize = require('../config/database');
global.userSessionObject = {};
const LoginRouter = express.Router();

LoginRouter.route('/:email/:password')
    .get((req, res, next) => {
        sequelize.query(`Select * from user where emailID='${req.params.email.toLowerCase()}'`)
            .then((result) => {
                if (result[1].length > 0) {
                    let msg = (result[1][0].password == req.params.password) ? 'Valid User' : 'Incorrect Password';
                    result = { message: msg }
                    if (msg == 'Valid User') {
                        const temp_SessionId = req.sessionID
                        console.log(' USER INFO TO SESSION OBJ : ', temp_SessionId);
                        global.userSessionObject[temp_SessionId] = {
                            createdTime: Date.now()
                        }
                    }
                }
                else {
                    result = { message: 'Does not exist' };
                }

                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json({ success: true, info: null, result: result });
            }
            )
            .catch(err => { res.status(400).json({ success: false, info: err.status, result: null, message: err }) })

    })
module.exports = LoginRouter;

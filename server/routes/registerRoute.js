const express = require('express');
const sequelize = require('../config/database');
const RegisterRouter = express.Router();


RegisterRouter.route('/:EmailID')
    .get((req, res, next) => {
        check(req.params.EmailID).then(msg => {
            console.log(msg)
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json({ success: true, info: null, result: msg });
        })
    })
RegisterRouter.route('/').post((req, res, next) => {
    console.log("inserting");
    insert(req).then(msg => {
        console.log(msg)
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({ success: true, info: null, result: msg });
    })
})

function check(email) {
    var msg
    return sequelize.query(`select * from user where emailID='${email}'`).then(result => {
        if (result[1].length > 0) {
            msg = 'Present'

        }
        else {
            console.log('new user has to be registered');
            msg = 'Not'
        }
        return msg

    }).catch(err => { return err })
}

function insert(req) {
    var msg;
    return sequelize.query(`INSERT INTO employee(employeeID,LastName,FirstName,Organization) VALUES('${req.body.EmployeeID}','${req.body.LastName}','${req.body.FirstName}','${req.body.OrganizationName}');` +
        `INSERT INTO user(employeeID,emailID,password) VALUES('${req.body.EmployeeID}','${req.body.EmailID}','${req.body.Password}')`)
        .then((result) => {

            console.log("done");
            msg = 'Done';
            return msg;

        }).catch(err => { return err })
}

//insert into user(employeeID,emailID,password) values('${req.body.EmployeeID}','${req.body.EmailID}','${req.body.Password}')
// INSERT INTO employee(employeeID,LastName,FirstName,Organization) VALUES('${req.body.EmployeeID}','${req.body.LastName}','${req.body.FirstName}','${req.body.OrganizationName}');

module.exports = RegisterRouter;


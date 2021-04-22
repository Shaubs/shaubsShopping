const express = require('express');
const sequelize = require('../config/database');

const EmployeeRouter = express.Router();

EmployeeRouter.route('/:SearchCriteria/:search/:sortBy/:offset/:limit').get((req, res, next) => {
    sequelize.query(`select user.employeeID,FirstName,LastName,emailID,Organization from employee left join user on employee.employeeID=user.employeeID 
    where ${req.params.SearchCriteria}='${req.params.search.toLowerCase()}' order by ${req.params.sortBy} LIMIT ${req.params.offset},${req.params.limit}`)
        .then(result => {
            console.log(result[0])
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json({ success: true, info: null, result: result[0] });
        })
        .catch(err => { res.status(400).json({ success: false, info: err.status, result: null, message: err }) })
});

module.exports = EmployeeRouter;
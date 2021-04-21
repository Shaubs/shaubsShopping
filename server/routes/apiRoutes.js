const express = require('express');

const EmployeeRouter = express.Router();

EmployeeRouter.route('/:FirstName/:LastName/:employeeID/').get((req, res, next) => {
    console.log(req.session.auth)



});
module.exports = EmployeeRouter;
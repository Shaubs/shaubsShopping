const { Sequelize } = require('sequelize')

//CLEARDB_DATABASE_URL => mysql://[username]:[password]@[host]/[database name]?reconnect=true
//mysql://b521426b6beb5c:51e1dcfd@us-cdbr-east-03.cleardb.com/heroku_1cdc54fbd15a3fc?reconnect=true

var sequelize = new Sequelize("mysql://b521426b6beb5c:51e1dcfd@us-cdbr-east-03.cleardb.com/heroku_1cdc54fbd15a3fc?reconnect=true",
    {
        dialect: "mysql",
        dialectOptions: {
            multipleStatements: true
        }
    }
);
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize

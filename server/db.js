const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    "online_store",
    "postgres",
    "root",
    {
        dialect:"postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)
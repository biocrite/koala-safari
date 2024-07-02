const { Sequelize } = require("sequelize")

const db = new Sequelize("koala_safari", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

module.exports = db
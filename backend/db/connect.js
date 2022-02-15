const Sequelize = require("sequelize");
const config = require("config");

const sequelize = new Sequelize(config.database, config.userName, config.options.password, {
    dialect: config.options.dialect,
    host: config.options.host,
    port: config.options.port
});

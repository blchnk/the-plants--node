const Sequelize = require("sequelize");
const config = require("./config");

global.db = new Sequelize(config.database, config.userName, config.options.password, {
    dialect: config.options.dialect,
    host: config.options.host,
    port: config.options.port
});

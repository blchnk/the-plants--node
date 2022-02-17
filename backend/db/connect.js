const Sequelize = require("sequelize");
const config = require("./config");

global.db = new Sequelize(config.database, config.userName, config.options.password, {
    dialect: config.options.dialect,
    host: config.options.host,
    port: config.options.port
});

module.exports = async () => {
    try {
        await db.authenticate();
        await db.sync()
        console.log('- The database connection was successfully established');
    }
    catch (e) {
        console.log(e);
    }
};

let dbHost      = process.env.DB_HOST
let dbPort      = process.env.DB_PORT
let dbName      = process.env.DB_NAME
let dbUser      = process.env.DB_USERNAME
let dbPassword  = process.env.DB_PASSWORD

module.exports = {
    userName: dbUser,
    database: dbName,
    options: {
        host: dbHost,
        password: dbPassword,
        dialect: 'mysql',
        port: dbPort,
        logging: false,
        dialectOptions: {
            useUTC: true
        }
    },
    timezone: '+00:00'
}

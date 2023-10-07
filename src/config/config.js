require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "root",
    "database": "chat_db_27",
    "host": "localhost",
    "dialect": "postgres",
    "logging": false,// no permitimos que sequelize que haga console.logs
  },
  "test": {
    "username": "postgres",
    "password": "root",
    "database": "chat_db_test",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres",
    "logging": false,// no permitimos que sequelize que haga console.logs
    "dialectOptions": {ssl: { required: true, rejectUnauthorized: false }},
  }
}

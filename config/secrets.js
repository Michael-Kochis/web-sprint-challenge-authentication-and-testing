const dotenv= require('dotenv');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const DB_ENVIRONMENT = process.env.DB_ENVIRONMENT || 'development';
const PORT = process.env.PORT;
const TOKEN_SECRET = process.env.TOKEN_SECRET ||
    "Vogon poetry is widely known to be the worst poetry in existence.";

module.exports = {
    DATABASE_URL,
    DB_ENVIRONMENT,
    PORT,
    TOKEN_SECRET
}
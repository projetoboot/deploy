require('dotenv').config();

const DB_CONFIG = {
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '719732',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'cardap',
    port: parseInt(process.env.DB_PORT || '5432'),
    ssl: false
};

module.exports = DB_CONFIG;
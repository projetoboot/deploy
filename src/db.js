const { Pool } = require('pg');

const DB_CONFIG = {
    user: 'postgres',
    host: 'localhost',
    database: 'cardap',
    password: '719732',
    port: 5432
};

const pool = new Pool(DB_CONFIG);

module.exports = { pool };
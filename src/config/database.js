const mysql = require('mysql2/promise');

const DB_CONFIG = {
    host: 'localhost',
    user: 'irismar',
    password: '719732',
    database: 'lanchonete_bot',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(DB_CONFIG);

module.exports = pool;
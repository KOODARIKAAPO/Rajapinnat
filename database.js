const mysql = require('mysql2');

// Tietokantayhteys. Arvot voi antaa ympäristömuuttujina,
// muuten käytetään oletusarvoja.
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'netuser',
    password: process.env.DB_PASSWORD || 'netpass',
    database: process.env.DB_NAME || 'library'
});

module.exports = connection;

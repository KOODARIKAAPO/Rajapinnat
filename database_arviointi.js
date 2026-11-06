const mysql = require('mysql2');

// Tietokantayhteys Opintorekisteri-kantaan (arviointi).
// dateStrings: true palauttaa DATE-kentät muodossa '2014-09-05'
// eikä aikavyöhykkeen mukaan siirrettynä Date-oliona.
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'netuser',
    password: process.env.DB_PASSWORD || 'netpass',
    database: process.env.ARVIOINTI_DB_NAME || 'arviointi',
    dateStrings: true
});

module.exports = connection;

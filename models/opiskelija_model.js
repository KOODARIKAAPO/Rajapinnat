const db = require('../database_arviointi');

const opiskelija = {
    getAll: function (callback) {
        return db.query('SELECT * FROM Opiskelija', callback);
    },
    getOne: function (id, callback) {
        return db.query('SELECT * FROM Opiskelija WHERE idOpiskelija=?', [id], callback);
    },
    add: function (opiskelija, callback) {
        return db.query(
            'INSERT INTO Opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
            [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus],
            callback
        );
    },
    update: function (id, opiskelija, callback) {
        return db.query(
            'UPDATE Opiskelija SET Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? WHERE idOpiskelija=?',
            [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus, id],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('DELETE FROM Opiskelija WHERE idOpiskelija=?', [id], callback);
    }
};

module.exports = opiskelija;

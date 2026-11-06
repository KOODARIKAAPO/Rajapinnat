const db = require('../database_arviointi');

const opintojakso = {
    getAll: function (callback) {
        return db.query('SELECT * FROM Opintojakso', callback);
    },
    getOne: function (id, callback) {
        return db.query('SELECT * FROM Opintojakso WHERE idOpintojakso=?', [id], callback);
    },
    add: function (opintojakso, callback) {
        return db.query(
            'INSERT INTO Opintojakso (Koodi, Laajuus, Nimi) VALUES (?, ?, ?)',
            [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi],
            callback
        );
    },
    update: function (id, opintojakso, callback) {
        return db.query(
            'UPDATE Opintojakso SET Koodi=?, Laajuus=?, Nimi=? WHERE idOpintojakso=?',
            [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi, id],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('DELETE FROM Opintojakso WHERE idOpintojakso=?', [id], callback);
    }
};

module.exports = opintojakso;

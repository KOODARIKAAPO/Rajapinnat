const db = require('../database_arviointi');

const arviointi = {
    getAll: function (callback) {
        return db.query('SELECT * FROM Arviointi', callback);
    },
    getOne: function (id, callback) {
        return db.query('SELECT * FROM Arviointi WHERE idArviointi=?', [id], callback);
    },
    add: function (arviointi, callback) {
        return db.query(
            'INSERT INTO Arviointi (Paivamaara, Arvosana, idOpiskelija, idOpintojakso) VALUES (?, ?, ?, ?)',
            [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso],
            callback
        );
    },
    update: function (id, arviointi, callback) {
        return db.query(
            'UPDATE Arviointi SET Paivamaara=?, Arvosana=?, idOpiskelija=?, idOpintojakso=? WHERE idArviointi=?',
            [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('DELETE FROM Arviointi WHERE idArviointi=?', [id], callback);
    }
};

module.exports = arviointi;

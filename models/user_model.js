const db = require('../database_arviointi');
const bcrypt = require('bcryptjs');

// Kuinka monta kierrosta bcrypt tekee (2^10). Isompi luku = hitaampi murtaa.
const saltRounds = 10;

const user = {
    // Salasanaa ei palauteta rajapinnasta, vain käyttäjätunnus ja etunimi
    getAll: function (callback) {
        return db.query('SELECT username, fname FROM user', callback);
    },
    getOne: function (username, callback) {
        return db.query('SELECT username, fname FROM user WHERE username=?', [username], callback);
    },
    add: function (user, callback) {
        bcrypt.hash(user.password, saltRounds, function (err, hash) {
            if (err) {
                return callback(err);
            }
            db.query(
                'INSERT INTO user (username, fname, password) VALUES (?, ?, ?)',
                [user.username, user.fname, hash],
                callback
            );
        });
    },
    update: function (username, user, callback) {
        bcrypt.hash(user.password, saltRounds, function (err, hash) {
            if (err) {
                return callback(err);
            }
            db.query(
                'UPDATE user SET fname=?, password=? WHERE username=?',
                [user.fname, hash, username],
                callback
            );
        });
    },
    delete: function (username, callback) {
        return db.query('DELETE FROM user WHERE username=?', [username], callback);
    }
};

module.exports = user;

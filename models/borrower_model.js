const db = require('../database');

const borrower = {
    getAll: function (callback) {
        return db.query('SELECT * FROM borrower', callback);
    },
    getOne: function (id, callback) {
        return db.query('SELECT * FROM borrower WHERE id_borrower=?', [id], callback);
    },
    add: function (borrower, callback) {
        return db.query(
            'INSERT INTO borrower (fname, lname, streetaddress) VALUES (?, ?, ?)',
            [borrower.fname, borrower.lname, borrower.streetaddress],
            callback
        );
    },
    update: function (id, borrower, callback) {
        return db.query(
            'UPDATE borrower SET fname=?, lname=?, streetaddress=? WHERE id_borrower=?',
            [borrower.fname, borrower.lname, borrower.streetaddress, id],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('DELETE FROM borrower WHERE id_borrower=?', [id], callback);
    }
};

module.exports = borrower;

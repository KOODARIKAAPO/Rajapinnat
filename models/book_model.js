const db = require('../database');

const book = {
    getAll: function (callback) {
        return db.query('SELECT * FROM book', callback);
    },
    getOne: function (id, callback) {
        return db.query('SELECT * FROM book WHERE id_book=?', [id], callback);
    },
    add: function (book, callback) {
        return db.query(
            'INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)',
            [book.name, book.author, book.isbn],
            callback
        );
    },
    update: function (id, book, callback) {
        return db.query(
            'UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',
            [book.name, book.author, book.isbn, id],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('DELETE FROM book WHERE id_book=?', [id], callback);
    }
};

module.exports = book;

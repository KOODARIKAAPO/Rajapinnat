const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

// READ: kaikki rivit
// GET /book
router.get('/', function (request, response) {
    book.getAll(function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else {
            response.json(dbResult);
        }
    });
});

// READ: yksi rivi id:n perusteella
// GET /book/:id
router.get('/:id', function (request, response) {
    book.getOne(request.params.id, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else if (dbResult.length === 0) {
            response.status(404).json({ error: 'Book not found' });
        } else {
            response.json(dbResult[0]);
        }
    });
});

// CREATE: uusi rivi, tiedot HTTP-bodyssa (JSON)
// POST /book
router.post('/', function (request, response) {
    book.add(request.body, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else {
            response.status(201).json(dbResult);
        }
    });
});

// UPDATE: päivitä rivi id:n perusteella, uudet tiedot HTTP-bodyssa (JSON)
// PUT /book/:id
router.put('/:id', function (request, response) {
    book.update(request.params.id, request.body, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Book not found' });
        } else {
            response.json(dbResult);
        }
    });
});

// DELETE: poista rivi id:n perusteella
// DELETE /book/:id
router.delete('/:id', function (request, response) {
    book.delete(request.params.id, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Book not found' });
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;

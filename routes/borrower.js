const express = require('express');
const router = express.Router();
const borrower = require('../models/borrower_model');

// READ: kaikki rivit
// GET /borrower
router.get('/', function (request, response) {
    borrower.getAll(function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else {
            response.json(dbResult);
        }
    });
});

// READ: yksi rivi id:n perusteella
// GET /borrower/:id
router.get('/:id', function (request, response) {
    borrower.getOne(request.params.id, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else if (dbResult.length === 0) {
            response.status(404).json({ error: 'Borrower not found' });
        } else {
            response.json(dbResult[0]);
        }
    });
});

// CREATE: uusi rivi, tiedot HTTP-bodyssa (JSON)
// POST /borrower
router.post('/', function (request, response) {
    borrower.add(request.body, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else {
            response.status(201).json(dbResult);
        }
    });
});

// UPDATE: päivitä rivi id:n perusteella, uudet tiedot HTTP-bodyssa (JSON)
// PUT /borrower/:id
router.put('/:id', function (request, response) {
    borrower.update(request.params.id, request.body, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Borrower not found' });
        } else {
            response.json(dbResult);
        }
    });
});

// DELETE: poista rivi id:n perusteella
// DELETE /borrower/:id
router.delete('/:id', function (request, response) {
    borrower.delete(request.params.id, function (err, dbResult) {
        if (err) {
            response.status(500).json(err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Borrower not found' });
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;

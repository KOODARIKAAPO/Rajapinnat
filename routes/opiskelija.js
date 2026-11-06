const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

// Muuttaa vierasavainvirheet selkeiksi vastauksiksi, muut virheet -> 500
function sendError(response, err) {
    if (err.code === 'ER_ROW_IS_REFERENCED_2') {
        response.status(409).json({ error: 'Opiskelija-riviin viitataan Arviointi-taulussa, poista ensin arvioinnit' });
    } else {
        response.status(500).json(err);
    }
}

// READ: kaikki rivit
// GET /opiskelija
router.get('/', function (request, response) {
    opiskelija.getAll(function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.json(dbResult);
        }
    });
});

// READ: yksi rivi id:n perusteella
// GET /opiskelija/:id
router.get('/:id', function (request, response) {
    opiskelija.getOne(request.params.id, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.length === 0) {
            response.status(404).json({ error: 'Opiskelija not found' });
        } else {
            response.json(dbResult[0]);
        }
    });
});

// CREATE: uusi rivi, tiedot HTTP-bodyssa (JSON)
// POST /opiskelija
router.post('/', function (request, response) {
    opiskelija.add(request.body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.status(201).json(dbResult);
        }
    });
});

// UPDATE: päivitä rivi id:n perusteella, uudet tiedot HTTP-bodyssa (JSON)
// PUT /opiskelija/:id
router.put('/:id', function (request, response) {
    opiskelija.update(request.params.id, request.body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Opiskelija not found' });
        } else {
            response.json(dbResult);
        }
    });
});

// DELETE: poista rivi id:n perusteella
// DELETE /opiskelija/:id
router.delete('/:id', function (request, response) {
    opiskelija.delete(request.params.id, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Opiskelija not found' });
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;

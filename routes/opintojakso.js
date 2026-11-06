const express = require('express');
const router = express.Router();
const opintojakso = require('../models/opintojakso_model');

// Muuttaa vierasavainvirheet selkeiksi vastauksiksi, muut virheet -> 500
function sendError(response, err) {
    if (err.code === 'ER_ROW_IS_REFERENCED_2') {
        response.status(409).json({ error: 'Opintojakso-riviin viitataan Arviointi-taulussa, poista ensin arvioinnit' });
    } else {
        response.status(500).json(err);
    }
}

// READ: kaikki rivit
// GET /opintojakso
router.get('/', function (request, response) {
    opintojakso.getAll(function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.json(dbResult);
        }
    });
});

// READ: yksi rivi id:n perusteella
// GET /opintojakso/:id
router.get('/:id', function (request, response) {
    opintojakso.getOne(request.params.id, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.length === 0) {
            response.status(404).json({ error: 'Opintojakso not found' });
        } else {
            response.json(dbResult[0]);
        }
    });
});

// CREATE: uusi rivi, tiedot HTTP-bodyssa (JSON)
// POST /opintojakso
router.post('/', function (request, response) {
    opintojakso.add(request.body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.status(201).json(dbResult);
        }
    });
});

// UPDATE: päivitä rivi id:n perusteella, uudet tiedot HTTP-bodyssa (JSON)
// PUT /opintojakso/:id
router.put('/:id', function (request, response) {
    opintojakso.update(request.params.id, request.body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Opintojakso not found' });
        } else {
            response.json(dbResult);
        }
    });
});

// DELETE: poista rivi id:n perusteella
// DELETE /opintojakso/:id
router.delete('/:id', function (request, response) {
    opintojakso.delete(request.params.id, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Opintojakso not found' });
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;

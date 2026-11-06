const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');

// Muuttaa vierasavainvirheet selkeiksi vastauksiksi, muut virheet -> 500
function sendError(response, err) {
    if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        response.status(400).json({ error: 'idOpiskelija tai idOpintojakso ei ole olemassa' });
    } else {
        response.status(500).json(err);
    }
}

// READ: kaikki rivit
// GET /arviointi
router.get('/', function (request, response) {
    arviointi.getAll(function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.json(dbResult);
        }
    });
});

// READ: yksi rivi id:n perusteella
// GET /arviointi/:id
router.get('/:id', function (request, response) {
    arviointi.getOne(request.params.id, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.length === 0) {
            response.status(404).json({ error: 'Arviointi not found' });
        } else {
            response.json(dbResult[0]);
        }
    });
});

// CREATE: uusi rivi, tiedot HTTP-bodyssa (JSON)
// POST /arviointi
router.post('/', function (request, response) {
    arviointi.add(request.body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.status(201).json(dbResult);
        }
    });
});

// UPDATE: päivitä rivi id:n perusteella, uudet tiedot HTTP-bodyssa (JSON)
// PUT /arviointi/:id
router.put('/:id', function (request, response) {
    arviointi.update(request.params.id, request.body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Arviointi not found' });
        } else {
            response.json(dbResult);
        }
    });
});

// DELETE: poista rivi id:n perusteella
// DELETE /arviointi/:id
router.delete('/:id', function (request, response) {
    arviointi.delete(request.params.id, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'Arviointi not found' });
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;

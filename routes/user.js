const express = require('express');
const router = express.Router();
const user = require('../models/user_model');

// Varattu käyttäjätunnus -> 409, muut virheet -> 500
function sendError(response, err) {
    if (err.code === 'ER_DUP_ENTRY') {
        response.status(409).json({ error: 'Username already exists' });
    } else {
        response.status(500).json(err);
    }
}

function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}

// READ: kaikki käyttäjät (ilman salasanaa)
// GET /user
router.get('/', function (request, response) {
    user.getAll(function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.json(dbResult);
        }
    });
});

// READ: yksi käyttäjä käyttäjätunnuksen perusteella
// GET /user/:username
router.get('/:username', function (request, response) {
    user.getOne(request.params.username, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.length === 0) {
            response.status(404).json({ error: 'User not found' });
        } else {
            response.json(dbResult[0]);
        }
    });
});

// CREATE: uusi käyttäjä, salasana kryptataan bcryptillä ennen tallennusta
// POST /user  body: { "username": "...", "fname": "...", "password": "..." }
router.post('/', function (request, response) {
    const body = request.body || {};
    if (!isNonEmptyString(body.username) || !isNonEmptyString(body.password)) {
        return response.status(400).json({ error: 'username and password are required' });
    }
    user.add(body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else {
            response.status(201).json(dbResult);
        }
    });
});

// UPDATE: päivitä etunimi ja salasana (kryptataan uudelleen)
// PUT /user/:username  body: { "fname": "...", "password": "..." }
router.put('/:username', function (request, response) {
    const body = request.body || {};
    if (!isNonEmptyString(body.password)) {
        return response.status(400).json({ error: 'password is required' });
    }
    user.update(request.params.username, body, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'User not found' });
        } else {
            response.json(dbResult);
        }
    });
});

// DELETE: poista käyttäjä käyttäjätunnuksen perusteella
// DELETE /user/:username
router.delete('/:username', function (request, response) {
    user.delete(request.params.username, function (err, dbResult) {
        if (err) {
            sendError(response, err);
        } else if (dbResult.affectedRows === 0) {
            response.status(404).json({ error: 'User not found' });
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;

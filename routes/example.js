const express = require('express');
const router = express.Router();

// Middleware, joka suoritetaan kaikille pyynnöille, joiden polku alkaa /example
// (metodista riippumatta: GET, POST jne.)
router.use('/example',
    function (req, res, next) {
        console.log('The example middleware called');
        next();
    }
);

// GET-metodi
// http://localhost:3000/example
router.get('/example',
    function (request, response) {
        response.send('I am example');
        console.log('I am example');
    }
);

// GET-metodi yhdellä parametrilla
// http://localhost:3000/example/Jim
router.get('/example/:name',
    function (request, response) {
        response.send('Hello ' + request.params.name);
    }
);

// GET-metodi kahdella parametrilla
// http://localhost:3000/example2/Jim/Jones
router.get('/example2/:firstName/:lastName',
    function (request, response) {
        response.send('Hello ' + request.params.firstName + ' ' + request.params.lastName);
    }
);

// POST-metodi: palauttaa saman datan, joka lähetettiin HTTP-bodyssa
// POST http://localhost:3000/example  (Postman: Body -> raw -> JSON)
router.post('/example',
    function (request, response) {
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = router;

# Postman-testit

- [Routing ja Middleware](#routing-ja-middleware)
- [CRUD: book ja borrower](#crud-book-ja-borrower)
- [CRUD: Opintorekisteri](#crud-opintorekisteri)

## Routing ja Middleware

Koodi: [routes/example.js](../routes/example.js) ja [app.js](../app.js)

### GET-metodi
`GET http://localhost:3000/example`

![GET](get_example.png)

### GET-metodi yhdellä parametrilla
`GET http://localhost:3000/example/Jim`

![GET yhdellä parametrilla](get_one_param.png)

### GET-metodi kahdella parametrilla
`GET http://localhost:3000/example2/Jim/Jones`

![GET kahdella parametrilla](get_two_params.png)

### POST-metodi
`POST http://localhost:3000/example` (Body → raw → JSON)

![POST](post_example.png)

### Middleware-funktio
Palvelimen konsoli: yleinen middleware suoritetaan jokaisella pyynnöllä, `/example`-middleware vain kun polku alkaa `/example`.

![Middleware](Middleware_exemple.png)

## CRUD: book ja borrower

Koodi: [routes/book.js](../routes/book.js), [routes/borrower.js](../routes/borrower.js), [models/book_model.js](../models/book_model.js), [models/borrower_model.js](../models/borrower_model.js) ja [database.js](../database.js)
Tietokanta: [sql/library.sql](../sql/library.sql)

Kaikki kuvat yhtenä PDF-tiedostona: **[CRUD_book_borrower.pdf](CRUD_book_borrower.pdf)**

POST- ja PUT-pyynnöissä data lähetetään muodossa Body → raw → JSON.

### Taulujen rakenne

![Taulujen rakenne](Taulujen_rakenne.png)

### Taulu: book

#### READ – GET
`GET http://localhost:3000/book`

![READ GET /book](book_get_all.png)

#### READ – GET
`GET http://localhost:3000/book/1`

![READ GET /book/1](book_get_one.png)

#### CREATE – POST
`POST http://localhost:3000/book`

![CREATE POST /book](book_post.png)

#### UPDATE – PUT
`PUT http://localhost:3000/book/8`

![UPDATE PUT /book/8](book_put.png)

#### DELETE – DELETE
`DELETE http://localhost:3000/book/8`

![DELETE DELETE /book/8](book_delete.png)

### Taulu: borrower

#### READ – GET
`GET http://localhost:3000/borrower`

![READ GET /borrower](borrower_get_all.png)

#### READ – GET
`GET http://localhost:3000/borrower/1`

![READ GET /borrower/1](borrowr_get_one.png)

#### CREATE – POST
`POST http://localhost:3000/borrower`

![CREATE POST /borrower](borrower_post.png)

#### UPDATE – PUT
`PUT http://localhost:3000/borrower/6`

![UPDATE PUT /borrower/6](borrower_put.png)

#### DELETE – DELETE
`DELETE http://localhost:3000/borrower/6`

![DELETE DELETE /borrower/6](borrower_delete.png)

## CRUD: Opintorekisteri

Tietokanta `arviointi`, taulut Opiskelija, Opintojakso ja Arviointi. Yksi opiskelija voi saada monta arviointia, ja yhdellä opintojaksolla voi olla monta arviointia.

Koodi: [routes/opiskelija.js](../routes/opiskelija.js), [routes/opintojakso.js](../routes/opintojakso.js), [routes/arviointi.js](../routes/arviointi.js), mallit kansiossa [models/](../models/) ja yhteys [database_arviointi.js](../database_arviointi.js)

Kaikki kuvat yhtenä PDF-tiedostona: **[CRUD_opintorekisteri.pdf](CRUD_opintorekisteri.pdf)**

POST- ja PUT-pyynnöissä data lähetetään muodossa Body → raw → JSON.

Vierasavainten käsittely:
- Opiskelijan tai opintojakson poisto, kun siihen viitataan Arviointi-taulussa → `409 Conflict`
- Arviointi olemattomalle opiskelijalle tai opintojaksolle → `400 Bad Request`

### Taulu: Opiskelija

#### READ – GET
`GET http://localhost:3000/opiskelija`

![READ GET /opiskelija](opiskelija_get_all.png)

#### READ – GET
`GET http://localhost:3000/opiskelija/1`

![READ GET /opiskelija/1](opiskelija_get_one.png)

#### CREATE – POST
`POST http://localhost:3000/opiskelija`

![CREATE POST /opiskelija](opiskelija_post.png)

#### UPDATE – PUT
`PUT http://localhost:3000/opiskelija/7`

![UPDATE PUT /opiskelija/7](opiskelija_put.png)

#### DELETE – DELETE
`DELETE http://localhost:3000/opiskelija/7`

![DELETE DELETE /opiskelija/7](opiskelija_delete.png)

### Taulu: Opintojakso

#### READ – GET
`GET http://localhost:3000/opintojakso`

![READ GET /opintojakso](opintojakso_get_all.png)

#### READ – GET
`GET http://localhost:3000/opintojakso/3`

![READ GET /opintojakso/3](opintojakso_get_one.png)

#### CREATE – POST
`POST http://localhost:3000/opintojakso`

![CREATE POST /opintojakso](opintojakso_post.png)

#### UPDATE – PUT
`PUT http://localhost:3000/opintojakso/12`

![UPDATE PUT /opintojakso/12](opintojakso_put.png)

#### DELETE – DELETE
`DELETE http://localhost:3000/opintojakso/12`

![DELETE DELETE /opintojakso/12](opintojakso_delete.png)

### Taulu: Arviointi

#### READ – GET
`GET http://localhost:3000/arviointi`

![READ GET /arviointi](arviointi_get_all.png)

#### READ – GET
`GET http://localhost:3000/arviointi/1`

![READ GET /arviointi/1](arviointi_get_one.png)

#### CREATE – POST
`POST http://localhost:3000/arviointi`

![CREATE POST /arviointi](arviointi_post.png)

#### UPDATE – PUT
`PUT http://localhost:3000/arviointi/17`

![UPDATE PUT /arviointi/17](arviointi_put.png)

#### DELETE – DELETE
`DELETE http://localhost:3000/arviointi/17`

![DELETE DELETE /arviointi/17](arviointi_delete.png)

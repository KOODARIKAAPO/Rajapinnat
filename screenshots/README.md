# Postman-testit

- [Routing ja Middleware](#routing-ja-middleware)
- [CRUD: book ja borrower](#crud-book-ja-borrower)

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

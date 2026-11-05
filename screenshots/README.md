# Postman-testit: Routing ja Middleware

Koodi: [routes/example.js](../routes/example.js) ja [app.js](../app.js)

## GET-metodi
`GET http://localhost:3000/example`

![GET](get_example.png)

## GET-metodi yhdellä parametrilla
`GET http://localhost:3000/example/Jim`

![GET yhdellä parametrilla](get_one_param.png)

## GET-metodi kahdella parametrilla
`GET http://localhost:3000/example2/Jim/Jones`

![GET kahdella parametrilla](get_two_params.png)

## POST-metodi
`POST http://localhost:3000/example` (Body → raw → JSON)

![POST](post_example.png)

## Middleware-funktio
Palvelimen konsoli: yleinen middleware suoritetaan jokaisella pyynnöllä, `/example`-middleware vain kun polku alkaa `/example`.

![Middleware](Middleware_exemple.png)

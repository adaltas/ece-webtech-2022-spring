---
duration: 3 hours
---

# Express framework

The course will introduce Node.js frameworks and focus on Express to write a web application that exposes REST services and renders HTML pages.

## What is Express?

* Minimalist framework for NodeJS apps
* Provides features for web app development
* Create robust APIs
* Functions to expose a front end

[Express guide](https://expressjs.com/en/guide/routing.html)

## What’s an API?

* Application Programming Interface
* In web: REST API
  * Expose a set of HTTP routes
  * Use HTTP verbs (GET / POST / PUT / DELETE)
  * Client connects to communicate
  * Usually communicating in JSON

REST API example: https://petstore.swagger.io/

## How to use an API?

* Combination of two sides:
  * Back-end: REST API
  * Front-end: web pages w/ JS, mobile app, …
* Express brings both for the web!

## Create a basic server

* Manually: use Node.js `http` module
* With Express:

```javascript
const express = require('express')
const app = express()

app.set('port', 8080)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
```

## Routing

* Manually: parse the URL and apply corresponding logic
* With Express:

```javascript
app.get('/', function (req, res) {
  // GET
})

app.post('/', (req, res) => {
  // POST
})

app
  .put('/', function (req, res) {
    // PUT
  })
  .delete('/', (req, res) => {
    // DELETE
  })
```

## Routing

You can add parameters in the routes:

```javascript
app.get(
  '/hello/:name', 
  function (req, res) {
    res.send("Hello " + req.params.name)
  }
)
```

## Postman

* Dashboard to test your API
* Simulate HTTP request
* Specify custom body & headers
* [getpostman.com](http://getpostman.com)

## Other tools for testing API

* [Swagger Inspector](https://inspector.swagger.io)
* `curl` Bash command

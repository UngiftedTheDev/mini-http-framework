# Mini HTTP Framework

A lightweight HTTP framework built from scratch in Node.js to understand how frameworks like Express work internally.

## What it demonstrates
- HTTP request/response lifecycle
- Custom routing system
- Middleware pipeline with `next()` flow
- Request body parsing using streams
- Response abstraction (`send`, `json`, `status`)
- Centralized error handling (404 & 500)
- Express-like API (`app.get`, `app.post`, `app.use`)

## Example

```js
import createApp from "./src/index.js";

const app = createApp();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from custom framework");
});

app.listen(3000);

## Status
- Day 1 complete ✅
- Day 2 complete ✅

## Day 2 — Routing System

### What was built
- Custom Router class
- Route registration system
- Method + path matching
- 404 fallback handling

### Key Concepts Learned
- How routing works internally
- How frameworks map requests to handlers
- Separation of concerns (server vs router)


## Status
- Day 1 ✅ Basic HTTP server
- Day 2 ✅ Routing system
- Day 3 ✅ Response helpers

## Day 2 — Routing System abstraction

## Features
- Custom router (method + path matching)
- Response abstraction:
  - `res.send()`
  - `res.json()`
  - `res.status()`

- Day 3 ✅ Response helpers
- Day 4 ✅ Middleware system

## Features
- Custom router (method + path matching)
- Response abstraction:
  - `res.send()`
  - `res.json()`
  - `res.status()`
- Middleware support:
  - `app.use()`
  - `next()` flow
  - Request blocking (e.g. `/blocked → 403`)

  ## Status
- Day 1 ✅ Basic HTTP server
- Day 2 ✅ Routing system
- Day 3 ✅ Response helpers
- Day 4 ✅ Middleware system
- Day 5 ✅ JSON body parsing (request streams)
- Day 6 ✅ Centralized error handling and router cleanup

## New Additions
- Request body parsing using streams (`req.body`)
- Safe JSON handling with error responses (400)
- Centralized error handling (500)
- Proper 404 handling outside the router

- Day 7 ✅ App layer (Express-like API)
- Final day to clean up server.js and abstract all the functions like express
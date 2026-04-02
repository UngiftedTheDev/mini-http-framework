# Mini HTTP Framework

A step-by-step implementation of a minimal HTTP framework in Node.js, built from scratch to understand how tools like Express work internally. This is tp help me actualize the concepte from the book i am now reading called "Computer networking A Top-down Approach"

## Day 1 — Basic HTTP Server

### What was built
- Raw HTTP server using Node.js `http` module
- Basic route handling using `req.url`
- Logging of incoming requests (`method` and `url`)
- Simple response handling with `res.end()`

### Key Concepts Learned
- How Node.js handles HTTP requests and responses
- The role of `req` and `res`
- The lifecycle of a request
- Difference between raw Node HTTP and frameworks like Express

### Example

```js
import http from "http";

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === "/") {
    res.end("Hello World");
    return;
  }

  res.end("Route not found");
});

server.listen(3000);

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
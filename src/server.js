"use strict";

// 3RD PARTY DEPENDENCIES
const express = require("express");
const cors = require("cors");
const app = express();

// INTERNAL MODULES
const notFoundHandler = require("./error-handlers/404");
const errors = require("./error-handlers/500");
const logger = require("./middleware/logger");
const foodRouter = require("./routes/food");
const clothesRouter = require("./routes/clothes");
const todoRouter = require("./routes/todo");
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/category");

const { router, modelRouter } = require("./routes/v1");
// GLOBAL MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(logger);

// ROUTES
app.use(foodRouter);
app.use(clothesRouter);
app.use(todoRouter);
app.use(productRouter);
app.use(categoryRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});

// app.use('/api/v1/',router)
// app.use('/api')

// ERROR HANDLERS
app.use("*", notFoundHandler);
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server on ${port}`));
  },
};

// pull in dependencies
const express = require("express");
const helmet = require("helmet");

// pull in router
const RecipeRouter = require("./recipe-router.js");

// declare server
const server = express();

// apply middleware to server
server.use(helmet());
server.use(express.json());

// sanity check
server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is awake" });
});

// apply routers to server
server.use("/api/recipes", RecipeRouter);

module.exports = server;

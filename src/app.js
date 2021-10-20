if (process.env.USER) require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();

//errorhandling
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

//routers
const moviesRouter = require("./movies/movies.router");

app.use(express.json());
app.use(cors());

app.use("/movies", moviesRouter);

app.use(errorHandler);
app.use(notFound);

module.exports = app;

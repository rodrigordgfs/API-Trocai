"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const indexRoute = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api-trocai", indexRoute);

module.exports = app;

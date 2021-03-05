"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes");

const AlreadyExists = require("./errors/alreadyExists");
const NotFound = require("./errors/notFound");
const FieldNotFound = require("./errors/fieldNotFound");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.use((error, req, res, next) => {
    if (error instanceof AlreadyExists) {
        res.status(409).send({ message: error.message });
    } else if (error instanceof NotFound) {
        res.status(404).send({ message: error.message });
    } else if (error instanceof FieldNotFound) {
        res.status(400).send({ message: error.message });
    } else {
        res.status(400).send({ message: error.message });
    }
});

module.exports = app;

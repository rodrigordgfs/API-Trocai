"use strict";

const express = require("express");
const router = express.Router();
const config = require("config");

router.get("/", (req, res, next) => {
    res.status(200).send({
        title: "API Trocai",
        version: config.get("api.tag") || "1.0.0-rc",
        author: "Shinoda Labs",
    });
});

module.exports = router;

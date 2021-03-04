"use strict";

const categorie = require("../models/categorie");

categorie
    .sync()
    .then(() => {
        console.log("Table CATEGORIE created succesfully!");
    })
    .catch((e) => {
        console.error(e);
    });

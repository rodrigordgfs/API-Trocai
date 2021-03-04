"use strict";

const categorie = require("../models/categorie");
const permissions = require("../models/permissions");

permissions
    .sync()
    .then(() => {
        console.log("Table PERMISSIONS created succesfully!");
    })
    .catch((e) => {
        console.error(e);
    });

categorie
    .sync()
    .then(() => {
        console.log("Table CATEGORIE created succesfully!");
    })
    .catch((e) => {
        console.error(e);
    });

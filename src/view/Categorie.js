"use strict";
const categorie = require("../repositories/Categorie");
const AlreadyExists = require("../errors/alreadyExists");

class Categorie {
    constructor({ id, name, active, created_at, updated_at }) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    async getAlreadyExists() {
        const data = await categorie.getAlreadyExists(this.name);
        if (data) {
            throw new AlreadyExists('Categoria')
        }
    }

    async getAll() {
        return await categorie.findAll();
    }

    async post() {
        const data = await categorie.post({
            name: this.name,
            active: this.active,
        });
        this.id = data.id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

module.exports = Categorie
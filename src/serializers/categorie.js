"use strict";

const repository = require("../repositories/categorie");
const AlreadyExists = require("../errors/alreadyExists");

class Categorie {
    constructor({ id, name, active, createdAt, updatedAt, version }) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.version = version;
    }

    async getAlreadyExists() {
        const data = await repository.getAlreadyExists(this.name)
        if (data) {
            throw new AlreadyExists('Categoria')
        }
    }

    async post() {
        const data = await repository.post({
            name: this.name,
            active: this.active,
        });
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.version = data.version;
    }
}

module.exports = Categorie

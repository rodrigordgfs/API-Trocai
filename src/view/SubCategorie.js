"use strict";

const subcategorie = require("../repositories/SubCategorie");
const AlreadyExists = require("../errors/alreadyExists");

class SubCategorie {
    constructor({ id, name, categorie_id, active, created_at, updated_at }) {
        this.id = id;
        this.name = name;
        this.categorie_id = categorie_id
        this.active = active;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    async getAlreadyExists() {
        const data = await subcategorie.getAlreadyExists(this.name);
        if (data) {
            throw new AlreadyExists('SubCategoria')
        }
    }

    async getAll() {
        return await subcategorie.findAll();
    }

    async post() {
        const data = await subcategorie.post({
            name: this.name,
            active: this.active,
            categorie_id: this.categorie_id
        });
        this.id = data.id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

module.exports = SubCategorie
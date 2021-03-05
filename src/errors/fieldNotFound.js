class FieldNotFound extends Error {
    constructor(data) {
        super(`O campo ${data} é obrigatório.`);
        this.name = "FieldNotFound";
        this.id = 2;
    }
}

module.exports = FieldNotFound;

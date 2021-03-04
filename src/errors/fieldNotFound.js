class FieldNotFound extends Error {
    constructor(data) {
        super(`O campo ${data} é obrigatório.`);
        this.name = "FieldNotFound";
        this.id = 0;
    }
}

module.exports = FieldNotFound;

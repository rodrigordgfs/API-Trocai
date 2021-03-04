class AlreadyExists extends Error {
    constructor(data) {
        super(`${data} já existe.`);
        this.name = "AlreadyExists";
        this.id = 0;
    }
}

module.exports = AlreadyExists;

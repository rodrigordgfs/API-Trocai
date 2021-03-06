class NotFound extends Error {
  constructor(data) {
    super(`${data} não encontrado(a).`);
    this.name = "NotFound";
    this.id = 0;
  }
}

module.exports = NotFound;

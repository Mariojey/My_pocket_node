const db = require('../config/db')

class City {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    static findAll() {
        let query = `SELECT * FROM hotele.miasta`;

        return db.execute(query)
    }
}

module.exports = City
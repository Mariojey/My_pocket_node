const db = require('../config/db')

class Country {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    static findAll() {
        let query = `SELECT * FROM kraje`;

        return db.execute(query)
    }

    static findCountryById(props) {
        let query = `SELECT * FROM hotele.kraje WHERE kraje.id_kraju = ${props}`

        return db.execute(query)
    }
}

module.exports = Country
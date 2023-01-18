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

    static findCityById(props) {
        let query = `SELECT * FROM hotele.miasta WHERE miasta.id_miasta = ${props}`;

        return db.execute(query)
    }
}

module.exports = City
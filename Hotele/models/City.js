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

    async save() {

        let query = `
        INSERT INTO hotele.miasta(
            nazwa_miasta,
            kod_miasta
        ) VALUES (
            '${this.name}',
            '${this.code}'
        )
        `

        const [newCity, _] = await db.execute(query)

        return newCity;
    }
}

module.exports = City
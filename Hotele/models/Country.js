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

    async save() {

        let query = `
        INSERT INTO hotele.kraje(
            nazwa_kraju,
            kod_kraju
        ) VALUES (
            '${this.name}',
            '${this.code}'
        )
        `

        const [newCountry, _] = await db.execute(query);

        return newCountry;
    }
}

module.exports = Country
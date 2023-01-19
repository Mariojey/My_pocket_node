const db = require('../config/db')

class Client {
    constructor(name, surname, country_id, city_id, adress, count, documentation_id) {
        this.name = name;
        this.surname = surname;
        this.country_id = country_id;
        this.city_id = city_id;
        this.adress = adress;
        this.count = count;
        this.documentation_id = documentation_id
    }

    static findAll() {
        let query = `SELECT * FROM klienci`;

        return db.execute(query)
    }

    static findClientById(props) {
        let query = `SELECT * FROM hotele.klienci WHERE klienci.id_klient = ${props}`;

        return db.execute(query)
    }

    static findClientByCountry(props) {
        let query = `SELECT * FROM hotele.klienci WHERE klienci.id_kraju = ${props}`;

        return db.execute(query)
    }

    async save() {
        let query = `
        INSERT INTO hotele.klienci(
            imie,
            nazwisko,
            id_kraju,
            id_miasto,
            adres,
            licznik,
            nr_dokumentacji
        ) VALUES (
            '${this.name}',
            '${this.surname}',
            ${this.country_id},
            ${this.city_id},
            '${this.adress}',
            ${this.count},
            '${this.documentation_id}'
        )
        `

        const [newClient, _] = await db.execute(query);

        return newClient;
    }
}

module.exports = Client
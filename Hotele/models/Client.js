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
}

module.exports = Client
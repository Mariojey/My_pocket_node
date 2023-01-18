const db = require('../config/db')

class Hotel {
    constructor(name, country_id, city_id, adress, stars, phonenumber, email, domain) {
        this.name = name;
        this.country_id = country_id;
        this.city_id = city_id;
        this.adress = adress;
        this.stars = stars;
        this.phonenumber = phonenumber;
        this.email = email;
        this.domain = domain;
    }

    static findAll() {
        let query = `SELECT * FROM hotele.hotele`;

        return db.execute(query)
    }

    static findHotelById(props) {
        let query = `SELECT * FROM hotele.hotele WHERE hotele.id_hotel = ${props}`

        return db.execute(query)
    }

    async save() {
        let query = `
        INSERT INTO hotele.hotele(
            nazwa,
            id_kraj,
            id_miasto,
            adres,
            gwiazdki,
            telefon,
            email,
            www
        ) VALUES (
            '${this.name}',
            ${this.country_id},
            ${this.city_id},
            '${this.adress}',
            ${this.stars},
            '${this.phonenumber}',
            '${this.email}',
            '${this.domain}'
        )
        `

        const [newHotel, _] = await db.execute(query);

        return newHotel;
    }
}

module.exports = Hotel
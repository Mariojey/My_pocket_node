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

    static findAllExtended() {
        let query = `SELECT 
        hotele.nazwa, 
        kraje.nazwa_kraju, 
        miasta.nazwa_miasta, 
        hotele.adres, 
        hotele.gwiazdki, 
        hotele.telefon, 
        hotele.email, 
        hotele.www 
        FROM hotele.hotele 
        JOIN kraje ON hotele.id_kraj = kraje.id_kraju 
        JOIN miasta ON hotele.id_miasto = miasta.id_miasta`;


        return db.execute(query)

    }

    static findHotelById(props) {
        let query = `SELECT * FROM hotele.hotele WHERE hotele.id_hotel = ${props}`

        return db.execute(query)
    }

    static findHotelByCountry(props) {
        let query = `SELECT * FROM hotele.hotele WHERE hotele.id_kraj = ${props}`

        return db.execute(query)
    }

    static findHotelByCity(props) {
        let query = `SELECT * FROM hotele.hotele WHERE hotele.id_miasto = ${props}`

        return db.execute(query)
    }

    static findHotelByStars(props) {
        let query = `SELECT * FROM hotele.hotele WHERE hotele.gwiazdki = ${props}`

        return db.execute(query)
    }

    static orderHotelByStars() {
        let query = `SELECT * FROM hotele.hotele ORDER BY hotele.gwiazdki DESC`

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
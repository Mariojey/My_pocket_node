const db = require('../config/db')

class Parking {
    constructor(hotel_id, numer) {
        this.hotel_id = hotel_id;
        this.numer = numer;
    }

    static findAll() {
        let query = `SELECT * FROM hotele.parking`;

        return db.execute(query)
    }

    static findParkingById(props) {
        let query = `SELECT * FROM hotele.parking WHERE parking.id_parking = ${props}`

        return db.execute(query)
    }

    static findParkingByHotel(props) {
        let query = `SELECT * FROM hotele.parking WHERE parking.id_hotel = ${props}`

        return db.execute(query)
    }

    async save() {
        let query = `
        INSERT INTO hotele.parking(
            id_hotel,
            numer
        ) VALUES (
            ${this.hotel_id},
            ${this.numer}
        )
        `

        const [newParking, _] = await db.execute(query);

        return newParking;

    }
}

module.exports = Parking
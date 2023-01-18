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
}

module.exports = Parking
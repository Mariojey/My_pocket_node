const db = require('../config/db')

class Reservation {
    constructor(client_id, start_date, end_date, room_id, parking_id, is_done) {
        this.client_id = client_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.room_id = room_id;
        this.parking_id = parking_id;
        this.is_done = is_done;
    }

    static findAll() {
        let query = `SELECT * FROM hotele.rezerwacje`;

        return db.execute(query)
    }

    static findReservationById(props) {
        let query = `SELECT * FROM hotele.rezerwacje WHERE rezerwacje.id_rezerwacji = ${props}`

        return db.execute(query)
    }
}

module.exports = Reservation
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

    static findReservationByClient(props) {
        let query = `SELECT * FROM hotele.rezerwacje WHERE rezerwacje.id_klient = ${props}`

        return db.execute(query)
    }

    static orderReservationByStartData() {
        let query = `SELECT * FROM hotele.rezerwacje ORDER BY data_start_rezerwacji DESC`

        return db.execute(query)
    }

    static orderReservationByEndData() {
        let query = `SELECT * FROM hotele.rezerwacje ORDER BY data_koniec_rezerwacji DESC`

        return db.execute(query)
    }

    static getDoneReservation() {
        let query = `SELECT * FROM hotele.rezerwacje WHERE rezerwacje.zrealizowane is TRUE`

        return db.execute(query)
    }

    async save() {

        let query = `
        INSERT INTO hotele.rezerwacje(
            id_klient,
            data_start_rezerwacji,
            data_koniec_rezerwacji,
            id_pokoju,
            id_parking,
            zrealizowane
        ) VALUES (
            ${this.client_id},
            ${this.start_date},
            ${this.end_date},
            ${this.room_id},
            ${this.parking_id},
            ${this.is_done}
        )
        `

        const [newReservation, _] = await db.execute(query);

        return newReservation;

    }
}

module.exports = Reservation
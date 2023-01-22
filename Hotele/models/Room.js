const db = require('../config/db')

class Room {
    constructor(hotel_id, room_number, floor, count_of_people) {
        this.hotel_id = hotel_id;
        this.room_number = room_number;
        this.floor = floor;
        this.count_of_people = count_of_people
    }

    static findAll() {

        let query = `SELECT * FROM hotele.pokoje`;

        return db.execute(query)
    }

    static findAllExtended() {
        let query = `SELECT 
        hotele.nazwa AS hotel, 
        pokoje.nr_pokoju, 
        pokoje.pietro, 
        pokoje.ludzie 
        FROM pokoje JOIN hotele ON pokoje.id_hotel = hotele.id_hotel`;

        return db.execute(query)
    }

    static findRoomById(props) {

        let query = `SELECT * FROM hotele.pokoje WHERE pokoje.id_pokoju = ${props}`;

        return db.execute(query)
    }

    static findRoomByHotel(props) {
        let query = `SELECT * FROM hotele.pokoje WHERE pokoje.id_hotel = ${props}`;

        return db.execute(query)
    }

    static findRoomByFloor(props) {
        let query = `SELECT * FROM hotele.pokoje WHERE pokoje.pietro = ${props}`;

        return db.execute(query)
    }

    static findRoomByCountOfPeople(props) {
        let query = `SELECT * FROM hotele.pokoje WHERE pokoje.ludzie = ${props}`;

        return db.execute(query)
    }

    static orderRoomsByCountOfPeople() {
        let query = `SELECT * FROM hotele.pokoje ORDER BY ludzie DESC`;

        return db.execute(query)
    }

    async save() {
        let query = `
        INSERT INTO hotele.pokoje(
            id_hotel,
            nr_pokoju,
            pietro,
            ludzie
        ) VALUES (
            ${this.hotel_id},
            ${this.room_number},
            ${this.floor},
            ${this.count_of_people}
        )
        `

        const [newRoom, _] = await db.execute(query);

        return newRoom;
    }
}

module.exports = Room
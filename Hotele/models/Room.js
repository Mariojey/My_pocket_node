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
}

module.exports = Room
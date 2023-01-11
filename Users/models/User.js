const db = require('../config/db')

class User {
    constructor(username, password, name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    async save() {
        let date = new Date();
        let yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        let created_at = `${yyyy}-${mm}-${dd}`;

        let query = `
        INSERT INTO users(
            username,
            password,
            name,
            created_at
        ) VALUES (
            '${this.username}',
            '${this.password}',
            '${this.name}',
            '${this.created_at}'
        )
        `

        const [newUser, _] = await db.execute(query);

        return newUser;
    }
    static findAll() {
        let query = `SELECT * FROM users`;

        return db.execute(query)
    }
}

module.exports = User
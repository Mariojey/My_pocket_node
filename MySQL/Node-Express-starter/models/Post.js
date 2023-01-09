const db = require('../config/db')

class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body
    }

    async save() {
        let date = new Date();
        let yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let query = `
        INSERT INTO posts(
            title,
            body,
            created_at
        ) VALUES (
            '${this.title}',
            '${this.body}',
            '${this.createdAtDate}'
        )
        `
    }

    static findAll()
}
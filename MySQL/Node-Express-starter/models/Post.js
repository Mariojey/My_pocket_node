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
        let dd = date.getDate();

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

        const [newPost, _] = await db.execute(query);

        return newPost;
    }
    static findAll() {
        let query = `SELECT * FROM posts`;

        return db.execute(query)
    }

    static findById(id) {
        let query = `SELECT * FROM posts WHERE id LIKE ${id}`;

        return db.execute(query)
    }


}


module.exports = Post;
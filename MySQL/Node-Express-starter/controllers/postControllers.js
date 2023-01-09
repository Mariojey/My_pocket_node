const Post = require('../models/Post')

exports.getAllPosts = async(req, res, next) => {
    try {
        const posts = await Post.findAll();

        res.send(200).json({ posts })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewPost = async(req, res, next) => {
    try {

        let { title, body } = req.body;
        let post = new Post(title, body);

        post = await post.save();

        console.log(post);
        res.status(200).json({ message: "Post created" });

    } catch (error) {
        console.log(error);
        next(error)
    }

}

exports.getPostById = async(req, res, next) => {
    res.send('get by Id');

}
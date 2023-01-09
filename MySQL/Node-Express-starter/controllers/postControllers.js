exports.getAllPosts = async(req, res, next) => {
    res.send('Get all posts');
}

exports.createNewPost = async(req, res, next) => {
    res.send('Create New Post');

}

exports.getPostById = async(req, res, next) => {
    res.send('get by Id');

}
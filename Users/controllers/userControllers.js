const User = require('../models/User')

exports.getAllUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();

        res.status(200).json({ users })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createNewUser = async(req, res, next) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        console.log(username, password, name);
        let user = new User(username, password, name);
        user = await user.save();

        console.log(user);
        res.status(200).json({ message: "User created" })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
const User = require('../models/User');

class UserController {
    async store(req, res) {
        const user = await User.create(req.body);
        return res.send(user);
    }

    async show(req, res) {
        const user = await User.find({email: req.body.email});

        return res.json(user);
    }
}

module.exports = new UserController();
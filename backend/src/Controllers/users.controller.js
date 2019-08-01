const userCtrl = {};

const User = require('../Models/User');

userCtrl.createUser = async(req, res) => {
    const { userName } = req.body;
    const newUser = new User({ userName });
    await newUser.save();
    res.json({ message: 'User created' })
}

userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
}

userCtrl.deleteUser = async(req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'User deleted' })
}

module.exports = userCtrl;
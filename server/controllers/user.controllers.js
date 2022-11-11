const { User } = require('../models/user.model')

// create
module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// read all
module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// read one
module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.user_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// update
module.exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.user_id }, req.body, { new: true, runValidators: true })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// delete
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.user_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}



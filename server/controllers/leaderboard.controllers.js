const { Leaderboard } = require('../models/leaderboard.model')

// create
module.exports.addToLeaderboard = (req, res) => {
    Leaderboard.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json(err))
}
// read all
module.exports.getLeaderboards = (req, res) => {
    // add sorting limits
    Leaderboard.find()
        .then(results => res.json(results))
        .catch(err => res.json(err))
}
// delete
module.exports.deleteScore = (req, res) => {
    Leaderboard.deleteOne({ _id: req.params.leaderboard_id })
        .then(results => res.json(results))
        .catch(err => res.json(err))
}


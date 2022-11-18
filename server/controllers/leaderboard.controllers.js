const { Leaderboard } = require("../models/leaderboard.model")

// create
module.exports.addToLeaderboard = (req, res) => {
    Leaderboard.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json(err))
}
// read all
module.exports.getLeaderboards = (req, res) => {
    // add sorting limits
    Leaderboard.find({}, ["initials", "score", "createdAt"], { limit: 8, sort: {score: -1, createdAt: -1} })
        .then(results => res.json(results))
        .catch(err => res.json(err))
}



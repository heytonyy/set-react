// import mongoose
const mongoose = require('mongoose')

const LeaderboardSchema = new mongoose.Schema({
    initials: {
        type: String
    },
    score: {
        type: Number
    },
}, { timestamps: true })

module.exports.Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema)


// sorting and limiting on server side


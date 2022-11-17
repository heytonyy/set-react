// import mongoose
const mongoose = require("mongoose")

const LeaderboardSchema = new mongoose.Schema({
    initials: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 3
    },
    score: {
        type: Number,
        required: true,
        minLength: 2,
        maxLength: 3

    },
}, { timestamps: true })

module.exports.Leaderboard = mongoose.model("Leaderboard", LeaderboardSchema)
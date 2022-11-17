// import mongoose
const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    number: {
        type: Number
    },
    shape: {
        type: String
    },
    color: {
        type: String
    },
    fill: {
        type: String
    }
}, { timestamps: true })

module.exports.Card = mongoose.model("Card", CardSchema)
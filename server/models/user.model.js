// import mongoose
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    confirm_password: {
        type: String
    }
}, { timestamps: true })

module.exports.User = mongoose.model('User', UserSchema)
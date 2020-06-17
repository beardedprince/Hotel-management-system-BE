const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema({
    name: String,
    email: String,
    password: String,
    dateJoined: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model('user', UserSchema)
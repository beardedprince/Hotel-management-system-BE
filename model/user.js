const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema({
    name: String,
    email: String,
    password: String,
    // isAdmin: { default: false, type: Boolean },
    dateJoined: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model('user', UserSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String,
    checkInDate: {
        type: Date
    },
    checkOutDate: {
        type: Date
    },
    roomID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room'
    }
}, 
{ timestamps: true})

module.exports = mongoose.model('booking', bookingSchema)
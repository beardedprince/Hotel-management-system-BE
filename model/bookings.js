const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = Schema({
    date_in: {
        type: Date
    },
    date_out: {
        type: Date
    },
    status: String,
    reservedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('booking', bookingSchema)
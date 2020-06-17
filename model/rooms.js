const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = Schema({
    room_number: String,
    image_url: [],
    status: String,
    room_type: String,
    beds: Number,
    max_occupancy: Number,
    cost_per_night: Number,
    description: String,
    DateCreated: {
        type: Date
    }
    // reserved: [
    //     {
    //         book_from: String,
    //         book_to: String
    //     }
    // ]
}, {timestamps: true}
)

module.exports = mongoose.model('room', roomSchema)
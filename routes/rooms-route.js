const express = require('express')

const roomsRoute = express.Router()

const Rooms = require('../model/rooms')



roomsRoute.post('/room', (req, res) => {
    const roomsData = req.body
    const newRoom = new Rooms(roomsData)
    newRoom.save((err, data) => {
        if(err) {
            res.status(400).send(' Error creating new resource')
        } else {
            res.status(201).send(data)
        }
    })
})


roomsRoute.get('/rooms', (req, res) => {
    Rooms.find({}, (err, rooms) => {
        if(err) {
            res.status(400).send('Error getting rooms')
        } else {
            res.status(200).send(rooms)
        }
    }).populate('roomBooked')
})

roomsRoute.get('/room/available', (req, res) => {
    Rooms.count({status: 'Available'}, (err, rooms) => {
        if(err) {
            res.status(400).send('Error getting rooms')
        } else {
            res.status(200).json({
                status: 'success',
                data: rooms
            })
        }
    })
})

roomsRoute.get('/room/unavailable', (req, res) => {
    Rooms.count({status: 'Booked'}, (err, rooms) => {
        if(err) {
            res.status(400).send('Error getting rooms')
        } else {
            res.status(200).json({
                status: 'success',
                data: rooms
            })
        }
    })
})

roomsRoute.get('/room/:id', (req, res) => {
    Rooms.findById(req.params.id, (err, data) => {
        if(err) {
            res.status(400).send('Error getting room by its ID')
        } else {
            res.status(200).send(data)
        }
    })
})

// edit rooms
// roomsRoute.put('/room/:id', (req, res) => {
//     Rooms.findById(req.params.id, (err, data) => {
//         if(err) {
//             res.status(400).send('Error getting room by its ID')
//         } else {
//             data.room_number = req.body.room_number
//             data.image_url = req.body.image_url
//             data.status = req.body.status
//             data.room_type = req.body.room_type
//             data.beds = req.body.beds
//             data.max_occupancy = req.body.max_occupancy
//             data.cost_per_night = req.body.cost_per_night
//             data.description = req.body.description

//             data.save()

//             res.status(200).json({
//                 message: data
//             })
//         }
//     })
// })


roomsRoute.delete('/room/:id', async (req, res) => {
   await Rooms.findByIdAndRemove(req.params.id, (err, result) => {
        if(err) {
            console.log('err')
            res.status()
        } else {
            res.status(200).json({
                status: 'deleted successfully',
                data: result
            })
        }
    }).sort({ date: -1})
})


roomsRoute.get('/allrooms', async (req, res) => {
   await Rooms.estimatedDocumentCount({}, (err, result) => {
        if(err) {
            console.log('err')
        } else {
            res.status(200).json({
                status: 'success',
                data: result
            })
        }
    }).sort({ date: -1})
})



module.exports = roomsRoute
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


module.exports = roomsRoute
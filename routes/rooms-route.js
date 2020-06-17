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
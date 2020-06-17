const express = require('express')

const bookingsRoute = express.Router()

const Bookings = require('../model/bookings')



bookingsRoute.post('/booking/:id', (req, res) => {
    const roombody = req.body
    roombody.roomID = req.params.id
    const newBooking = new Bookings(roombody)
    newBooking.save((err, data) => {
        if(err) {
            res.status(400).send(' Error creating new booking')
        } else {
            res.status(200).json({
                message: 'comment successful',
                data: data
            })
        }
    })
})


bookingsRoute.get('/bookings', (req, res) => {
    Bookings.find({}, (err, result) => {
        if(err) {
            res.status(400).send('Error getting bookings')
        } else {
            res.status(200).send(result)
        }
    }).populate('roomID').sort({createdAt: -1});
})

bookingsRoute.get('/booking/guest/:id', (req, res) => {
    Bookings.findById(req.params.id, (err, data) => {
        if(err) {
            res.status(400).send('Error getting room by its ID')
        } else {
            res.status(200).send(data)
        }
    }).populate('roomID');
})

bookingsRoute.get('/all-bookings', async (req, res) => {
    await Bookings.estimatedDocumentCount({}, (err, result) => {
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


module.exports = bookingsRoute
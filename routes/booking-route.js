const express = require('express')

const bookingsRoute = express.Router()

const Bookings = require('../model/bookings')



bookingsRoute.post('/bookings', (req, res) => {
    const bookingData = req.body
    const newBooking = new Bookings(bookingData)
    newBooking.save((err, data) => {
        if(err) {
            res.status(400).send(' Error creating new booking')
        } else {
            res.status(201).send(data)
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
    }).populate('roomBooked');
})

// bookingsRoute.get('/room/:id', (req, res) => {
//     Rooms.findById(req.params.id, (err, data) => {
//         if(err) {
//             res.status(400).send('Error getting room by its ID')
//         } else {
//             res.status(200).send(data)
//         }
//     })
// })

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
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()
const port = process.env.PORT || 3000


const userRoute = require('./routes/users-route')
const roomsRoute = require('./routes/rooms-route')
const bookingsRoute = require('./routes/booking-route')
const config = require('./config/db')



app.use(bodyParser.json())
app.use(cors())

app.use('/api', userRoute)
app.use('/api', roomsRoute)
app.use('/api', bookingsRoute)

app.get('/', (req, res) => {
    res.send(' app running smootly 🚀')
})

app.listen( process.env.PORT || port, function() {
    console.log(` server running on ${port} 🔥`)
})
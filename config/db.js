const mongoose = require('mongoose')

require('dotenv').config()

const db = process.env.URL

mongoose.connect( db, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if( err) {
        console.log('connection to DB failed')
    } else {
        console.log('connection  to Database successful')
    }
})
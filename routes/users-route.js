const express = require('express')

const userRoute = express.Router()

const Users = require('../model/user')



userRoute.post('/register', (req, res) => {
    const registerData = req.body
    const newUser = new Users(registerData)
    newUser.save((err, data) => {
        if(err) {
            res.status(400).send(' Error creating new resource')
        } else {
            res.status(201).send(data)
        }
    })
})

userRoute.post('/login', async (req, res) => {
    const loginData = req.body
   await Users.findOne({email: loginData.email }, (err, user) => {
        if(err) {
            res.status(400).send('error occures')
        } else {
            if(!user) {
                res.status(401).send('invalid email')
            } else {
                if(loginData.password !== user.password) {
                    res.status(401).send('invalid password')
                } else {
                    res.status(200).json({
                        status: 'success',
                        data: user
                    })
                }
            }
        }
    })
})


userRoute.get('/users', (req, res) => {
    Users.find({}, ' -__v', (err, result) => {
        if (err) {
            res.status(400).send('failed to get users')
        } else {
            res.status(200).json({
                status: 'success',
                data: result
            })
        }
    })
})


module.exports = userRoute
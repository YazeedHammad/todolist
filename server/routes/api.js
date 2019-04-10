
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Info = require('../models/info')

const mongoose = require('mongoose')
const db = "mongodb://cgi:cgiandi19@ds133556.mlab.com:33556/cgiandi"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected To MongoDB')
    }
})


//get items from the database
router.get('/profile', (req, res, next) => {
    User.find({}).then(function (users) {
        res.send(users)
    })
})

// add new items to the database
router.post('/profile', (req, res) => {
    console.log(req.body)
    User.create(Object(req.body)).then(function (user) {
        res.send(user);
    })
})


//update the items in the database
router.put('/profile/:id', (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        res.send("updated");
    })
})

// delete items from the databse
router.delete('/profile/:id', (req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        console.log(req.params.id)
    })
    res.send("deleted");
})

//rerister
router.post('/register', (req, res) => {
    let userInfo = req.body;
    let user = new Info(userInfo);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({ token });
        }
    })
})

//login 
router.post('/login', (req, res) => {
    let userInfo = req.body;
    Info.findOne({ userName: userInfo.userName }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid UserName');
            } else
                if (user.password !== userInfo.password) {
                    res.status(401).send('Invalid Password');
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({ token });
                }
        }
    })
})


module.exports = router;
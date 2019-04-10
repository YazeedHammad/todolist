const mongoose = require('mongoose')

const Schema = mongoose.Schema

const infoSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
    password: String
    // todos: [userSchema]
})

module.exports = mongoose.model('info', infoSchema, 'infos')

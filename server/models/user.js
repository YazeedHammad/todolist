const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    id: Number,
    term: String
})

module.exports = mongoose.model('user', userSchema, 'users')
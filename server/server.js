
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const cors = require('cors');

const PORT =  4000;
const router = require('./routes/api');
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', router)
app.get('/', function(req, res) {
    res.send('Hello From Server')
})



app.listen(process.env.PORT || 4000, function() {
    console.log('Server Running on Localhost: ' + PORT)
})
const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal4Routes = require('../controllers/soal4Controller');
app.post('/BMI', soal4Routes.rumusBMI);

module.exports = app;
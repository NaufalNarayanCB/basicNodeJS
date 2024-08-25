const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal2controller = require ('../controllers/soal2Controller')

app.get("/celcius/:c", soal2controller.celcius)
app.get("/fahrenheit/:f", soal2controller.fahrenheit)
app.get("/kelvin/:k", soal2controller.kelvin)
app.get("/reamur/:r", soal2controller.reamur)

module.exports = app
const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.set('views', __dirname + '/views')
app.use(expressLayouts)
app.use(express.static('public'))


app.listen(process.env.PORT || 3000, () => {console.log('Server is lstening on port 3000...')})
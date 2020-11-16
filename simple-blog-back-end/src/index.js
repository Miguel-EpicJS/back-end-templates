const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const app = express()
const PORT = '3000'

app.use(bodyParser.json())
app.use('/', routes)
app.listen(PORT, ()=>{console.log("Listening on port " + PORT)})

const express = require('express')
const path = require('path')

const weatherRoutes = require('./routes/weather')
const actRoutes = require('./routes/activities')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/weather', weatherRoutes)
server.use('/api/v1/activities', actRoutes)

module.exports = server

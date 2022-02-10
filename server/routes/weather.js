require('dotenv').config()
const express = require('express')
const request = require('superagent')

const router = express.Router()

// setup for city parameters
router.get('/:city', (req, res) => {
  const city = req.params.city
  return request.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`)
    .then(response => {
      return res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// hard coded to Auckland
router.get('/', (req, res) => {
  return request.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Auckland&aqi=no`)
    .then(response => {
      return res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router

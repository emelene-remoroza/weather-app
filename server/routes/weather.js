require('dotenv').config()
const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req, res) => {
  console.log(process.env.WEATHER_API_KEY)
  return request.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Auckland&aqi=no`)
    .then(response => {
      return res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router

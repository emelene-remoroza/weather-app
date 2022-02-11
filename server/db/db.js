const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getActivities (db = connection) {
  return db('activities').select()
}

function getClothes (db = connection) {
  return db('clothes').select()
}


module.exports = {
  getActivities
}

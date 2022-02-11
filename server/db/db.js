const connection = require('./connection')

function getActivities (type, db = connection) {
  return db('activities')
    .select()
    .where('type', type)
}

function getClothes (db = connection) {
  return db('clothes').select()
}

module.exports = {
  getActivities,
  getClothes
}

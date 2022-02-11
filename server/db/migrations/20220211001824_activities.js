exports.up = function (knex) {
  return knex.schema.createTable('activities', table => {
    table.increments('id')
    table.string('activity')
    table.string('type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activities')
}

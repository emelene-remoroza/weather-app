exports.up = function (knex) {
  return knex.schema.createTable('clothes', table => {
    table.increments('id')
    table.string('layers')
    table.string('condition')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('clothes')
}

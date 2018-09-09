const knex = require('./')

// const Business = knex("business")

module.exports = {
  business: {
    list() {
      return knex('business')
    },
  }
}
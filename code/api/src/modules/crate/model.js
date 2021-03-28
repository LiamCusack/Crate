'use strict'

module.exports = function(sequelize, DataTypes) {
  // specifies Crate table data type?
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
// Define relationship crate:subscriptions one:many
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
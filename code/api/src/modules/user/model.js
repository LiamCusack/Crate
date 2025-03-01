'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: '/images/stock/default_profile.jpg'
    },
    shippingAddress: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    User.hasMany(models.Order)
  }

  return User
}
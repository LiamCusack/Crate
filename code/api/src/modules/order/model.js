'use strict'

// Order
module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define('orders', {
    subscriptionId: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.TEXT
    }
  })

  Order.associate = function(models) {
    Order.belongsTo(models.Subscription)
    Order.hasMany(models.OrderProducts)
    Order.belongsTo(models.User,{
      through: 'subscription'
    })
  }

  return Order
}

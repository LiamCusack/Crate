'use strict'

// Order
module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define('orders', {
    // userId: {
    //   type: DataTypes.INTEGER
    // },
    // crateId: {
    //   type: DataTypes.INTEGER
    // },
    subscriptionId: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.TEXT
    }
  })

  Order.associate = function(models) {
    Order.belongsTo(models.Subscription)
    Order.hasMany(models.OrderProduct, { as: 'orderProducts' })
    Order.belongsTo(models.User,{
      through: models.Subscription
    })
    Order.belongsTo(models.Crate,{
      through: models.Subscription
    })
  }

  return Order
}

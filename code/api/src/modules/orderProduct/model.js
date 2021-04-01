'use strict'

// Order Products
module.exports = function(sequelize, DataTypes) {
  let OrderProducts = sequelize.define('orderProducts', {
    orderId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    returned: {
      type: DataTypes.BOOLEAN
    }
  })

  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Order)
    OrderProducts.belongsTo(models.Product)
  }

  return OrderProducts
}
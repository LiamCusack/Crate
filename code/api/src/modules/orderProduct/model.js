'use strict'

// Order Products
module.exports = function(sequelize, DataTypes) {
  let OrderProduct = sequelize.define('orderProducts', {
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

  OrderProduct.associate = function(models) {
    OrderProduct.belongsTo(models.Order)
    OrderProduct.belongsTo(models.Product)
  }

  return OrderProduct
}
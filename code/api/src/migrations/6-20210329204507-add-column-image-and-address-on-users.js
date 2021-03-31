'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users', 
        'image',
        {
          type: Sequelize.TEXT,
          defaultValue: '/images/stock/default_profile.jpg'
        }
      ),
      queryInterface.addColumn(
        'users', 
        'shippingAddress',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'image'),
      queryInterface.removeColumn('users', 'shippingAddress')
    ]);
  }
};

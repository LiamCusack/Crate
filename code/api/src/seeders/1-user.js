'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alotta Person',
        email: 'alotta@crate.com',
        password: bcrypt.hashSync('password', config.saltRounds),
        role: params.user.roles.user,
        description: 'I am a lot!',
        shippingAddress: '123 Blueberry St., Denver, CO 80205',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lion Zion',
        email: 'lzion@example.com',
        password: bcrypt.hashSync('password', config.saltRounds),
        role: params.user.roles.user,
        description: 'I really like clothing.',
        shippingAddress: '123 Mulberry Ave., Denver, CO 80205',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}

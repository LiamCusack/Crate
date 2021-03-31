'user strict'; 

module.exports = {
  up: async (queryInterface) => {

    const users = await queryInterface.sequelize.query(
      `SELECT id from USERS;`
    );

    const crates = await queryInterface.sequelize.query(
      `SELECT id from CRATES;`
    );
    
    const userRows = users[0]
    const crateRows = crates[0]

    return await queryInterface.bulkInsert('subscriptions', [
      {id: 1, userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, userId: userRows[2].id, crateId: crateRows[2].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 6, userId: userRows[2].id, crateId: crateRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 7, userId: userRows[2].id, crateId: crateRows[2].id, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('subscriptions', null, {});
  }
};
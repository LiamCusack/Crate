'user strict'; 

module.exports = {
  up: async (queryInterface) => {

    const subscriptions = await queryInterface.sequelize.query(
      `SELECT id from SUBSCRIPTIONS;`
    );

    const subscriptionRows = subscriptions[0]

    return await queryInterface.bulkInsert('orders', [
      {id: 1, deliveryDate: '3/12/21', userId: userRows[3].id, subscrptionId: subscriptionRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, deliveryDate: '2/12/21', userId: userRows[3].id, subscrptionId: subscriptionRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, deliveryDate: '1/12/21', userId: userRows[3].id, subscrptionId: subscriptionRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, deliveryDate: '12/12/20', userId: userRows[3].id, subscrptionId: subscriptionRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, deliveryDate: '3/12/21', userId: userRows[2].id, subscrptionId: subscriptionRows[2].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 6, deliveryDate: '3/12/21', userId: userRows[2].id, subscrptionId: subscriptionRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 7, deliveryDate: '4/15/21', userId: userRows[2].id, subscrptionId: subscriptionRows[2].id, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
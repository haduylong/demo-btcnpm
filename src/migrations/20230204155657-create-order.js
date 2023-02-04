'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountId: {
        type: Sequelize.INTEGER
      },
      voucherId: {
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('pending', 'shipped', 'delivered')
      },
      payment: {
        type: Sequelize.ENUM('online', 'offline')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
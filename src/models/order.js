'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    accountId: DataTypes.INTEGER,
    voucherId: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    address: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'shipped', 'delivered'),
    payment: DataTypes.ENUM('online', 'offline')
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoyaltyProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoyaltyProgram.init({
    accountId: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LoyaltyProgram',
  });
  return LoyaltyProgram;
};
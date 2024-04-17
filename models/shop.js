'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shop.init({
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter item name"
        },
        notEmpty: {
          msg: "Item name cannot be empty"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "Please enter correct price"
        },
        notNull: {
          msg: "Please enter your password"
        },
        notEmpty: {
          msg: "Password cannot be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};
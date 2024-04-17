'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.User,{
        foreignKey: {
          name: "userID"
        }
      });
      Inventory.belongsTo(models.Digimon, {
        foreignKey : {
          name: "digimonID"
        }
      })
    }
  }
  Inventory.init({
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      allowNull: false,
      validate: {
        notNull: {
          msg: "userID cannot be null"
        },
        notEmpty: {
          msg: "userID cannot be empty"
        }
      }
    },
    digimonID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Digimons",
        key: "id"
      },
      allowNull: false,
      validate: {
        notNull: {
          msg: "digimonID cannot be null"
        },
        notEmpty: {
          msg: "digimonID cannot be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};
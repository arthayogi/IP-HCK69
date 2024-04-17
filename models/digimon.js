'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Digimon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Digimon.hasMany(models.Inventory, {
        foreignKey: {
          name: "digimonID"
        }
      })
    }
  }
  Digimon.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter digimon name"
        },
        notEmpty: {
          msg: "Digimon name cannot be empty"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: "Please enter correct image URL"
        },
        notNull: {
          msg: "Please enter correct image URL"
        },
        notEmpty: {
          msg: "Image URL cannot be empty"
        }
      }
    },
    rarity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "Please input number only"
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
    modelName: 'Digimon',
  });
  return Digimon;
};
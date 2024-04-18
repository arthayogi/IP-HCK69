'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Inventory,{
        foreignKey: {
          name: "userID"
        }
      })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your email"
        },
        notEmpty: {
          msg: "Email cannot be empty"
        },
        isEmail: {
          msg: "Please enter your email"
        }
      },
      unique: {
        msg : "Email already registered"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your password"
        },
        notEmpty: {
          msg: "Password cannot be empty"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your name"
        },
        notEmpty: {
          msg: "Password cannot be empty"
        }
      }
    },
    digimonCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    digicoin: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    hooks:{
      beforeCreate(data){
        data.password = hashPassword(data.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
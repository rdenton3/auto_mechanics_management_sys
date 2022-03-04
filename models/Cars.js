
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cars extends Model {}

Cars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Make: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Model: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      VIN: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    ///Year and Mileage
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cars',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Cars'
  }
);

module.exports = Cars;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Date: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'car',
        key: 'id'
      }
    },
    complete_id: {
      type: DataTypes.BOOLEAN,
    },
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule'
  }
);

module.exports = Schedule;

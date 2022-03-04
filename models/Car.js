const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Car extends Model {}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Make: {
      type: DataTypes.STRING,
      //allowNull: false,
 
    },
    Model: {
      type: DataTypes.STRING,
      //allowNull: false,

    },
    VIN: {
      type: DataTypes.STRING,

    },
    Year: {
      type: DataTypes.STRING,

    },
    Mileage: {
      type: DataTypes.INTEGER,

    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    Complete_id: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    //underscored: true,
    modelName: "Car",
  }
);

module.exports = Car;

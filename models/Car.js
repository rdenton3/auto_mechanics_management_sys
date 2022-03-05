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
    make: {
      type: DataTypes.STRING,
      //allowNull: false,
 
    },
    model: {
      type: DataTypes.STRING,
      //allowNull: false,

    },
    vin: {
      type: DataTypes.STRING,

    },
    year: {
      type: DataTypes.STRING,

    },
    mileage: {
      type: DataTypes.INTEGER,

    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },

  },
  {
    sequelize,
    freezeTableName: true,
    //underscored: true,
    modelName: "car",
  }
);

module.exports = Car;

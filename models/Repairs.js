const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Post model
class Repairs extends Model {}

// create fields/columns for Post model
Repairs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    status_id: {
      type: DataTypes.BOOLEAN,
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Car",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "repairs",
  }
);

module.exports = Repairs;

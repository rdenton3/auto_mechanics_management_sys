// import all models
const User = require("./User");
const Repairs = require("./Repairs");
const Schedule = require("./Schedule");
const Car = require("./Car");

// create associations
User.hasMany(Car, {
  foreignKey: "user_id",
});

User.hasMany(Schedule, {
  foreignKey: "car_id",
});

User.hasMany(Repairs, {
  foreignKey: "user_id",
});

Car.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Car.hasMany(Repairs, {
  foreignKey: "car_id",
});

Repairs.belongsTo(Car, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Repairs.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Repairs.belongsTo(Schedule, {
  foreignKey: "car_id",
  onDelete: "SET NULL",
});

Schedule.belongsTo(Car, {
  foreignKey: "car_id",
  onDelete: "SET NULL",
});

// Schedule.belongsTo(Car, {
//   foreignKey: "car_id",
//   onDelete: "SET NULL",
// });
// User.belongsToMany(Schedule, {
//   // through: Vote,
//   // as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });





module.exports = { User, Car, Repairs, Schedule };